"use client";

import moment from "moment";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

import { ApplicationContext } from "@libs/blog/contexts/application-context";
import { Container } from "@libs/blog/components/container";
import { Prose } from "@libs/blog/components/prose";
import { type ArticleWithSlug } from "@libs/blog/types/articles";
import { Theme } from "@libs/blog/types/themes";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back to articles"
      className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
    >
      <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
    </button>
  );
};

interface ArticleHeaderProps {
  article: ArticleWithSlug;
  theme: Theme;
}

const ArticleHeader = ({ article, theme }: ArticleHeaderProps) => {
  return (
    <header className="flex flex-col">
      <h1 className={twMerge(
        "mt-6 text-2xl font-bold tracking-tight sm:text-4xl",
        theme === "default" ? "text-zinc-800  dark:text-zinc-100" : "",
        theme === "solarized" ? "text-base01 dark:text-base1" : ""
      )}>
        {article.title}
      </h1>
      <time
        dateTime={article.date}
        className={twMerge(
          "order-first flex items-center text-base",
          theme === "default" ? "text-zinc-400 dark:text-zinc-500" : "",
          theme === "solarized" ? "text-base01 dark:text-base1" : ""
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
  const { previousPathname } = useContext(ApplicationContext);

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && <BackButton />}
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
