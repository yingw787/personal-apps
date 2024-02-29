import glob from "fast-glob";

import { Article, ArticleWithSlug } from "@libs/blog/types/articles";

async function importRecipe(recipeFilename: string): Promise<ArticleWithSlug> {
  const recipe = await import(
    `@apps/com-yingw787-cooking/app/recipes/${recipeFilename}`
  );
  const recipeWithSlug = {
    slug: recipeFilename.replace(/(\/page)?\.mdx$/, ""),
    ...(recipe.article as Article),
  };
  return recipeWithSlug;
}

export async function getAllRecipes() {
  const recipeFilenames = await glob("**/page.mdx", {
    cwd: `${process.cwd()}/app/recipes`,
  });
  const recipes = await Promise.all(recipeFilenames.map(importRecipe));
  return recipes.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
