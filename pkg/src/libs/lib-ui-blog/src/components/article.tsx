import moment from "moment";

import { Card } from "@libs/blog/components/card";
import { ArticleWithSlug } from "@libs/blog/types/articles";

interface RecentArticleProps {
  article: ArticleWithSlug;
}

export const RecentArticle = ({ article }: RecentArticleProps) => {
  return (
    <Card as="article">
      <Card.Title href={`/posts/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {moment(article.date).utc().format("MMMM D, YYYY")}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};
