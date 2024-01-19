import _ from "lodash";

import { getAllPosts } from "@apps/com-yingw787-blog/lib/posts";

export const getCategoriesByNumArticles = async () => {
  const articles = await getAllPosts();

  const categoryCounts = _(articles)
    .flatMap((article) => article.categories.map(_.toLower))
    .countBy()
    .map((count, category) => ({ category, count }))
    .value();

  return categoryCounts;
};

export const getArticlesByCategoryName = async (categoryName: string) => {
  const articles = await getAllPosts();

  const filteredArticles = _.filter(articles, (article) =>
    _.includes(article.categories.map(_.toLower), categoryName),
  );

  return filteredArticles;
};
