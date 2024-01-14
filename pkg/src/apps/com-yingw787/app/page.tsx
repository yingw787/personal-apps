import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

import { Container } from "@apps/com-yingw787/components/container";

import image1 from "@apps/com-yingw787/public/images/picture_guido.jpg";
import image2 from "@apps/com-yingw787/public/images/picture_gym_propic.jpg";
import image3 from "@apps/com-yingw787/public/images/picture_hackathon.jpg";
import image4 from "@apps/com-yingw787/public/images/picture_hiking.jpg";

const SocialLink = ({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
};

const Photos = () => {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2"];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            The only thing I know is that I know nothing.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            My name&apos;s Ying. I build quality products that make
            people&apos;s lives better. When I&apos;m not working, I enjoy
            powerlifting, reading, and trying new things.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/yingw787"
              aria-label="Follow on GitHub"
              icon={FaGithub}
            />
            <SocialLink
              href="https://linkedin.com/in/yingw787"
              aria-label="Follow on LinkedIn"
              icon={FaLinkedin}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
};

export default Home;
