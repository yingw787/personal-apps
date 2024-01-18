import _ from "lodash";

import { getAllPosts } from "@apps/com-yingw787-bytes/lib/posts";

export const getCategoriesByNumArticles = async () => {
  const articles = await getAllPosts();

  const categoryCounts = _(articles)
    .flatMap((article) => article.categories.map(_.toLower))
    .countBy()
    .map((count, category) => ({ category, count }))
    .value();

  return categoryCounts;
};
