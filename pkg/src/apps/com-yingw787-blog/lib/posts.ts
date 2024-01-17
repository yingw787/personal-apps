import glob from "fast-glob";

import { Article, ArticleWithSlug } from "@libs/blog/types/articles";

async function importPost(postFilename: string): Promise<ArticleWithSlug> {
  const { post } = (await import(`../app/posts/${postFilename}`)) as {
    default: React.ComponentType;
    post: Article;
  };

  return {
    slug: postFilename.replace(/(\/page)?\.mdx$/, ""),
    ...post,
  };
}

export async function getAllPosts() {
  const postFilenames = await glob("**/page.mdx", {
    cwd: `${process.cwd()}/app/posts`,
  });
  const posts = await Promise.all(postFilenames.map(importPost));
  return posts.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
