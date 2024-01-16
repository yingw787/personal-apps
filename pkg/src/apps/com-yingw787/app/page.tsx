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
import portraitImage from "@apps/com-yingw787/public/images/picture_hiking.jpg";

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
          <SocialLinksSection socialLinks={socialLinks} emailLink={emailLink} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
