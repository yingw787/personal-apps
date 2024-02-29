import { StarIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";

import { SimpleLayout } from "@libs/blog/components/simple-layout";

import MikeEshelman from "@apps/com-yingw787/public/images/picture_mike_eshelman.jpeg";

interface TestimonialSectionProps {
  quote: string;
  avatarImage: StaticImageData;
  name: string;
  role: React.ReactNode;
}

const TestimonialSection = ({
  quote,
  avatarImage,
  name,
  role,
}: TestimonialSectionProps) => {
  return (
    <section className="bg-white px-6 py-6 sm:py-8 lg:px-4">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-brand-primary-500">
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-5 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
          <p>{quote}</p>
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
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="mt-0.5 text-gray-600">{role}</div>
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
  quote: string;
  avatarImage: StaticImageData;
  name: string;
  role: React.ReactNode;
};

const Testimonials = () => {
  const testimonials: TestimonialQuote[] = [
    {
      quote:
        "Ying is an incredible talent. The first time we met in Q3 2023 I had mentioned a few things about the mortgage industry and how consumers had limited access to understanding a certain topic, within 3 days he had a working OpenAI ChatGPT persona trained and running on a site that blew me away. He has an entrepreneurial spirit, strong work ethic, and a desire to continue learning which is a fantastic recipe for success.",
      avatarImage: MikeEshelman,
      name: "Mike Eshelman",
      role: <>fmr. CMO of Mr.Cooper (NASDAQ: $COOP)</>,
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
