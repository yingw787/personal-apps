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
import portraitImage from "@apps/com-yingw787-blog/public/images/picture_kate_sleeping.jpg";

const InspirationalQuote = () => {
  return (
    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-base3 dark:border-gray-500 dark:bg-base03">
    <p className="text-lg italic font-bold leading-relaxed text-gray-900 dark:text-white">
      &quot;You don&apos;t ever have to do anything sensational for
      people to love you.&quot;
    </p>
    <br />
    <p className="text-md font-medium leading-relaxed text-gray-900 dark:text-white">
      Fred Rogers, Dartmouth College commencement address, 2002
    </p>
  </blockquote>
  )
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
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p>
          </div>



        </div>
        <div className="lg:pl-20">
          <SocialLinksSection
            socialLinks={socialLinks}
            emailLink={emailLink}
            theme="solarized"
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
