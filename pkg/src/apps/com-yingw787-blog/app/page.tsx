import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  FaLinkedin,
  FaGithub,
  FaPersonHiking,
  FaPersonWalkingLuggage,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Container } from "@libs/blog/components/container";
import portraitImage from "@apps/com-yingw787-blog/public/images/picture_kate_sleeping.jpg";

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
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-2xl italic font-bold leading-relaxed text-gray-900 dark:text-white">
              &quot;You don&apos;t ever have to do anything sensational for
              people to love you.&quot;
            </p>
            <br />
            <p className="text-xl font-medium leading-relaxed text-gray-900 dark:text-white">
              Fred Rogers, Dartmouth College commencement address, 2002
            </p>
          </blockquote>
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
              href="https://blog.yingw787.com"
              icon={FaPersonHiking}
              className="mt-4"
            >
              My Personal Blog
            </SocialLink>
            <SocialLink
              href="https://bytes.yingw787.com"
              icon={FaPersonWalkingLuggage}
              className="mt-4"
            >
              My Professional Blog
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
