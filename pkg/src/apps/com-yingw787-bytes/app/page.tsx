import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaPersonHiking,
  FaPersonWalkingLuggage,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Container } from "@libs/blog/components/container";
import { SocialLinksSection } from "@libs/blog/components/social-links";
import { SocialLinkNavigation } from "@libs/blog/types/navigation";
import { RecentArticle } from "@libs/blog/components/article";
import portraitImage from "@apps/com-yingw787-bytes/public/images/logo_hackathon_cropped.jpg";
import { getAllPosts } from "@apps/com-yingw787-bytes/lib/posts";

const InspirationalQuote = () => {
  return (
    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-zinc-50 dark:bg-black dark:border-gray-500">
      <p className="text-lg italic font-bold leading-relaxed text-gray-900 dark:text-white">
        You can mass-produce hardware. You cannot mass-produce software. You
        cannot mass-produce the human mind.
      </p>
      <br />
      <p className="text-md font-medium leading-relaxed text-gray-900 dark:text-white">
        Michio Kaku
      </p>
    </blockquote>
  );
};

async function RecentPosts() {
  const articles = (await getAllPosts()).slice(0, 4);
  return (
    <div className="mx-6 my-12 max-w-2xl">
      <div className="flex flex-col space-y-10">
        {articles.map((article, index) => (
          <RecentArticle key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  const socialLinks: SocialLinkNavigation[] = [
    {
      href: "https://github.com/yingw787",
      icon: FaGithub,
      title: "My GitHub",
    },
    {
      href: "https://linkedin.com/in/yingw787",
      icon: FaLinkedin,
      title: "My LinkedIn",
    },
    {
      href: "https://blog.yingw787.com",
      icon: FaPersonHiking,
      title: "My Personal Blog",
    },
    {
      href: "https://bytes.yingw787.com",
      icon: FaPersonWalkingLuggage,
      title: "My Professional Blog",
    },
  ];
  const emailLink: SocialLinkNavigation = {
    href: "mailto:me@yingw787.com",
    icon: MdEmail,
    title: "me@yingw787.com",
  };

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
          <InspirationalQuote />
          <RecentPosts />
        </div>
        <div className="lg:pl-20">
          <SocialLinksSection
            socialLinks={socialLinks}
            emailLink={emailLink}
            theme="default"
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
