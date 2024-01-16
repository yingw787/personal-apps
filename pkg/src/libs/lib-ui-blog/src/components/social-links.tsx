import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { SocialLinkNavigation } from "@libs/blog/types/navigation";
import { Theme } from "@libs/blog/types/themes";
import { Separator } from "@libs/shadcn-ui/components/ui/separator";

interface SocialLinkProps {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

const SocialLink = ({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps) => {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-brand-primary-500 dark:text-zinc-200 dark:hover:text-brand-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-brand-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
};

interface SocialLinksSectionProps {
  socialLinks: SocialLinkNavigation[];
  emailLink: SocialLinkNavigation;
  theme?: Theme;
}

export const SocialLinksSection = ({
  socialLinks,
  emailLink,
  theme = "default",
}: SocialLinksSectionProps) => {
  return (
    <ul>
      {socialLinks.map((socialLink, index) => {
        return (
          <div className="mt-4" key={index}>
            <SocialLink href={socialLink.href} icon={socialLink.icon}>
              {socialLink.title}
            </SocialLink>
          </div>
        );
      })}
      <div className="py-4">
        <Separator
          className={twMerge(
            theme === "default" ? "bg-zinc-100 dark:bg-zinc-700/40" : "",
            theme === "solarized" ? "bg-base3 dark:bg-base03" : "",
          )}
        />
      </div>
      <SocialLink href={emailLink.href} icon={emailLink.icon}>
        {emailLink.title}
      </SocialLink>
    </ul>
  );
};
