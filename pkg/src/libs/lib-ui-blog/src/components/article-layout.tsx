"use client";

import moment from "moment";
import { twMerge } from "tailwind-merge";

import { Container } from "@libs/blog/components/container";
import { Prose } from "@libs/blog/components/prose";
import { type ArticleWithSlug } from "@libs/blog/types/articles";
import { Theme } from "@libs/blog/types/themes";

interface ArticleHeaderProps {
  article: ArticleWithSlug;
  theme: Theme;
}

const ArticleHeader = ({ article, theme }: ArticleHeaderProps) => {
  return (
    <header className="flex flex-col">
      <h1
        className={twMerge(
          "mt-6 text-2xl font-bold tracking-tight sm:text-4xl",
          theme === "default" ? "text-zinc-800  dark:text-zinc-100" : "",
          theme === "solarized" ? "text-base01 dark:text-base1" : "",
        )}
      >
        {article.title}
      </h1>
      <time
        dateTime={article.date}
        className={twMerge(
          "order-first flex items-center text-base",
          theme === "default" ? "text-zinc-400 dark:text-zinc-500" : "",
          theme === "solarized" ? "text-base01 dark:text-base1" : "",
        )}
      >
        <span className="h-4 w-0.5 rounded-full bg-base01 dark:bg-base1" />
        <span className="ml-3">
          {moment(article.date).utc().format("MMMM D, YYYY")}
        </span>
      </time>
    </header>
  );
};

export const ArticleLayout = ({
  article,
  theme = "default",
  children,
}: {
  article: ArticleWithSlug;
  theme: Theme;
  children: React.ReactNode;
}) => {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <ArticleHeader article={article} theme={theme} />
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
};
