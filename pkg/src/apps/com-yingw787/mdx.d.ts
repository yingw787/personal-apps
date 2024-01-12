// mdx.d.ts
declare module "*.mdx" {
  let MDXComponent: (
    props: React.ComponentPropsWithoutRef<"div"> & Record<string, unknown>
  ) => JSX.Element;
  export default MDXComponent;
}
