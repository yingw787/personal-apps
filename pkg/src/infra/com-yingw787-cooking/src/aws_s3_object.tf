# Automatically upload your website files to S3 when you deploy
#
# When deploying your static website, it’s essential to ensure that your site’s
# files are correctly and efficiently transferred to the S3 bucket. The
# terraform file below provides an automated approach to achieve this.

# Uploads all files from the local "src/dist" directory to a specified AWS S3 bucket.
resource "aws_s3_object" "static_file" {
  for_each     = fileset(local.dist_dir, "**")
  bucket       = aws_s3_bucket.static_website.id
  key          = each.key
  source       = "${local.dist_dir}/${each.value}"
  content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), null)
  etag         = filemd5("${local.dist_dir}/${each.value}")
}
