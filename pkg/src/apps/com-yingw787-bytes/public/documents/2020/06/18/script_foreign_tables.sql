CREATE
OR REPLACE FUNCTION script_foreign_tables(
    param_server text,
    param_schema_search text,
    param_table_search text,
    param_ft_prefix text
) RETURNS SETOF text AS $$
-- params:
-- param_server: name of foreign data server
-- param_schema_search: wildcard search on schema use % for non-exact
-- param_ft_prefix: prefix to give new table in target database
-- include schema name if not default schema
-- example usage: SELECT script_foreign_tables('prod_server', 'ch01', '%', 'ch01.ft_')
WITH cols AS
(
   SELECT
      cl.relname AS table_name,
      na.nspname AS table_schema,
      att.attname AS column_name,
      format_type(ty.oid, att.atttypmod) AS column_type,
      attnum AS ordinal_position
   FROM
      pg_attribute att
      JOIN
         pg_type ty
         ON ty.oid = atttypid
      JOIN
         pg_namespace tn
         ON tn.oid = ty.typnamespace
      JOIN
         pg_class cl
         ON cl.oid = att.attrelid
      JOIN
         pg_namespace na
         ON na.oid = cl.relnamespace
      LEFT OUTER JOIN
         pg_type et
         ON et.oid = ty.typelem
      LEFT OUTER JOIN
         pg_attrdef def
         ON adrelid = att.attrelid
         AND adnum = att.attnum
   WHERE
      -- only consider non-materialized views and concrete tables (relations)
      cl.relkind IN
      (
         'v',
         'r'
      )
      AND na.nspname LIKE $2
      AND cl.relname LIKE $3
      AND cl.relname NOT IN
      (
         'spatial_ref_sys',
         'geometry_columns',
         'geography_columns',
         'raster_columns'
      )
      AND att.attnum > 0
      AND NOT att.attisdropped
   ORDER BY
      att.attnum
)
SELECT
   'CREATE FOREIGN TABLE ' || $4 || table_name || ' (' || string_agg(quote_ident(column_name) || ' ' || column_type , ', '
ORDER BY
   ordinal_position) || ')
 SERVER ' || quote_ident($1) || ' OPTIONS (schema_name ''' || quote_ident(table_schema)
 || ''', table_name ''' || quote_ident(table_name) || '''); ' As result
FROM
   cols
GROUP BY
   table_schema, table_name $$ language 'sql';
