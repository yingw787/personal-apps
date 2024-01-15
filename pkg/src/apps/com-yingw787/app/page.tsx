import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@apps/com-yingw787/components/container";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import portraitImage from "@apps/com-yingw787/public/images/picture_gym_propic.jpg";

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

const Home = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Ying. I build quality products to make people&apos;s lives
            easier.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve been a software engineer since 2016, and since then,
              I&apos;ve done full-stack engineering, platform engineering, data
              engineering, DevOps, and engineering management. I&apos;ve worked
              in B2B2C, B2B SaaS, and enterprise B2B, helping companies IPO,
              geting 7-figure enterprise deals closed, and creating engineering
              divisions from scratch.
            </p>
            <p>
              When I&apos;m not working, I like powerlifting, reading, and
              trying new things.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/yingw787"
              icon={FaGithub}
              className="mt-4"
            >
              My GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/yingw787"
              icon={FaLinkedin}
              className="mt-4"
            >
              My LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:me@yingw787.com"
              icon={MdEmail}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              me@yingw787.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Home;
