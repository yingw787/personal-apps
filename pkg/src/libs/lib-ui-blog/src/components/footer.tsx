import Link from "next/link";
import { twMerge } from "tailwind-merge";

import {
  ContainerInner,
  ContainerOuter,
} from "@libs/blog/components/container";
import { Navigation } from "@libs/blog/types/navigation";
import { Theme } from "@libs/blog/types/themes";

interface FooterProps {
  links: Navigation[];
  theme: Theme;
}

export const Footer = ({ links, theme }: FooterProps) => {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div
          className={twMerge(
            "pb-16 pt-10 border-t",
            theme === "default"
              ? "border-zinc-100 dark:border-zinc-700/40"
              : "",
            theme === "solarized" ? "border-base1 dark:border-base01" : "",
          )}
        >
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div
                className={twMerge(
                  "flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium",
                  theme === "default" ? "text-zinc-800 dark:text-zinc-200" : "",
                  theme === "solarized" ? "text-base01 dark:text-base1" : "",
                )}
              >
                {links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className={twMerge(
                        "transition",
                        theme === "default"
                          ? "hover:text-brand-primary-500 dark:hover:text-brand-primary-400"
                          : "",
                        theme === "solarized"
                          ? "hover:text-base02 dark:hover:text-base2"
                          : "",
                      )}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
              <p
                className={twMerge(
                  "text-sm",
                  theme === "default" ? "text-zinc-400 dark:text-zinc-500" : "",
                  theme === "solarized" ? "text-base01 dark:text-base1" : "",
                )}
              >
                &copy; {new Date().getFullYear()} Ying Wang. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
};
