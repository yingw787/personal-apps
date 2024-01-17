import moment from "moment";

import { Card } from "@libs/blog/components/card";
import { ArticleWithSlug } from "@libs/blog/types/articles";

interface RecentArticleProps {
  article: ArticleWithSlug;
}

export const RecentArticle = ({ article }: RecentArticleProps) => {
  return (
    <Card as="article">
      <Card.Title href={`/posts/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {moment(article.date).utc().format("MMMM D, YYYY")}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};

interface FullArticleProps {
  article: ArticleWithSlug;
}

export const FullArticle = ({ article }: FullArticleProps) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {moment(article.date).utc().format("MMMM D, YYYY")}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {moment(article.date).utc().format("MMMM D, YYYY")}
      </Card.Eyebrow>
    </article>
  );
}
