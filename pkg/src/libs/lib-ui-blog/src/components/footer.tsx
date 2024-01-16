import Link from "next/link";

import {
  ContainerInner,
  ContainerOuter,
} from "@libs/blog/components/container";
import { Navigation } from "@libs/blog/types/navigation";

interface FooterProps {
  links: Navigation[];
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className="transition hover:text-brand-primary-500 dark:hover:text-brand-primary-400"
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
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
