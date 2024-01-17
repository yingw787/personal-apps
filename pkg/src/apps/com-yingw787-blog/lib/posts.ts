import glob from "fast-glob";

import { Article, ArticleWithSlug } from "@libs/blog/types/articles";

async function importPost(postFilename: string): Promise<ArticleWithSlug> {
  const post = await import(
    `@apps/com-yingw787-blog/app/posts/${postFilename}`
  );
  const postWithSlug = {
    slug: postFilename.replace(/(\/page)?\.mdx$/, ""),
    ...post.article as Article,
  };
  return postWithSlug;
}

export async function getAllPosts() {
  const postFilenames = await glob("**/page.mdx", {
    cwd: `${process.cwd()}/app/posts`,
  });
  const posts = await Promise.all(postFilenames.map(importPost));
  return posts.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
