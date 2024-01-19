import { type Metadata } from "next";

import { SimpleLayout } from "@libs/blog/components/simple-layout";
import { FullArticle } from "@libs/blog/components/article";
import { getArticlesByCategoryName } from "@apps/com-yingw787-blog/lib/categories";

export const metadata: Metadata = {
  title: "Posts",
  description: null,
};

export default async function PostsByCategoryNameIndex({
  params,
}: {
  params: { categoryName: string };
}) {
  const articles = await getArticlesByCategoryName(params.categoryName);

  return (
    <SimpleLayout title={null} intro={null}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article, index) => (
            <FullArticle key={index} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
