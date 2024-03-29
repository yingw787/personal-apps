import { StarIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";

import { SimpleLayout } from "@libs/blog/components/simple-layout";

import MikeEshelman from "@apps/com-yingw787/public/images/picture_mike_eshelman.jpeg";
import AlanMcKellar from "@apps/com-yingw787/public/images/picture_alan_mckellar.png";
import MikeSpainhower from "@apps/com-yingw787/public/images/picture_mike_spainhower.jpg";
import DefaultAvatar from "@apps/com-yingw787/public/images/picture_default_avatar.jpg";

interface TestimonialSectionProps {
  quote: React.ReactNode;
  avatarImage: StaticImageData;
  name?: React.ReactNode;
  role: React.ReactNode;
}

const TestimonialSection = ({
  quote,
  avatarImage,
  name,
  role,
}: TestimonialSectionProps) => {
  return (
    <section className="bg-white dark:bg-zinc-900 px-6 py-6 sm:py-8 lg:px-4">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-yellow-500">
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-5 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
          <p className="text-zinc-800 dark:text-zinc-100">{quote}</p>
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-x-6">
          <Image
            src={avatarImage}
            alt=""
            sizes="3rem"
            className="h-12 w-12 rounded-full bg-gray-50"
            priority
          />
          <div className="text-sm leading-6">
            {name && (
              <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                {name}
              </div>
            )}
            <div className="mt-0.5 text-zinc-800 dark:text-zinc-100">
              {role}
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export const metadata = {
  title: "Testimonials",
  description: "What the people I've helped have to say about me.",
};

type TestimonialQuote = {
  quote: React.ReactNode;
  avatarImage: StaticImageData;
  name?: React.ReactNode;
  role: React.ReactNode;
};

const Testimonials = () => {
  const testimonials: TestimonialQuote[] = [
    {
      quote: (
        <>
          Ying is an incredible talent. The first time we met in Q3 2023, I had
          mentioned a few things about the mortgage industry, and how consumers
          had limited access to understanding a certain topic. Within 3 days, he
          had a working OpenAI ChatGPT persona trained and running on a site
          that blew me away. He has an entrepreneurial spirit, strong work
          ethic, and a desire to continue learning which is a fantastic recipe
          for success.
        </>
      ),
      avatarImage: MikeEshelman,
      name: (
        <>
          <a
            href="https://www.linkedin.com/in/eshelman"
            className="text-blue-600"
          >
            Mike Eshelman
          </a>
        </>
      ),
      role: (
        <>
          fmr. CMO of Mr.Cooper{" "}
          <a
            href="https://finance.yahoo.com/quote/COOP"
            className="text-blue-600 font-semibold"
          >
            (NASDAQ: $COOP)
          </a>
        </>
      ),
    },
    {
      quote: (
        <>
          You want the data engineering job done right? You want Ying. He is the
          consummate professional who seeks to understand his customer's needs
          and then implement innovative solutions. What I really enjoyed about
          working with Ying is that I knew I could provide some high-level
          requirements and step away to focus on other items. He always
          delivered for me and my teams.
        </>
      ),
      avatarImage: AlanMcKellar,
      name: (
        <>
          <a
            href="https://www.linkedin.com/in/alanmckellar"
            className="text-blue-600"
          >
            Alan McKellar
          </a>
        </>
      ),
      role: <>fmr. VP of Engineering at Janus Health</>,
    },
    {
      quote: (
        <>
          Initially, I had concerns about our acquisition channel reporting
          pipeline, which had been experiencing frequent downtime. This hindered
          our ability to effectively measure, improve, and scale our acquisition
          channels. However, Ying stepped in and implemented measures to
          strengthen the pipelines, thereby ensuring that the business could
          depend on accurate and timely acquisition channel data. I was
          particularly impressed by the level of engagement that Ying brought to
          the project, collaborating with stakeholders to ensure that their
          needs were met. Ying's ability to work seamlessly across functions and
          effectively apply technology to solve complex business issues is a
          testament to his exceptional engineering skills.
        </>
      ),
      avatarImage: MikeSpainhower,
      name: (
        <>
          <a
            href="https://www.linkedin.com/in/spainhower"
            className="text-blue-600"
          >
            Mike Spainhower
          </a>
        </>
      ),
      role: <>fmr. CTO of Caribou</>,
    },
    {
      quote: (
        <>
          The reason this [project] was one of the more seamless integrations
          I’ve worked on is because of good attitudes from you and others and
          the willingness to come back to the table over and over again and
          clarify things through dialogue. A lot of companies never make it this
          far, they're stuck with [legacy solutions].
        </>
      ),
      avatarImage: DefaultAvatar,
      role: <>VP of Acquisition Marketing, Series F security startup</>,
    },
  ];

  return (
    <SimpleLayout
      title="What the people I've helped have to say about me."
      intro=""
    >
      <div>
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialSection
              key={index}
              quote={testimonial.quote}
              avatarImage={testimonial.avatarImage}
              name={testimonial.name}
              role={testimonial.role}
            />
          );
        })}
      </div>
    </SimpleLayout>
  );
};

export default Testimonials;
