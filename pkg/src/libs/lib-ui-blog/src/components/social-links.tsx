import Link from "next/link";
import clsx from "clsx";

import { SocialLinkNavigation } from "@libs/blog/types/navigation";
import { Separator } from "@libs/shadcn-ui/components/ui/separator";

const SocialLink = ({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => {
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
}

export const SocialLinksSection = ({socialLinks, emailLink}: SocialLinksSectionProps) => {
  return (
    <ul>
      {socialLinks.map((socialLink, index) => {
        return (
          <div className="mt-4">
            <SocialLink
              href={socialLink.href}
              icon={socialLink.icon}
            >
              {socialLink.title}
            </SocialLink>
          </div>
        )
      })}
      <Separator className="mt-8 pt-8" />
      <SocialLink
        href={emailLink.href}
        icon={emailLink.icon}
      >
        {emailLink.title}
      </SocialLink>
    </ul>
  )
}
