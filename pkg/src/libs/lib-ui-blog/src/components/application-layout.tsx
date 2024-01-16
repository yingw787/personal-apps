import { StaticImageData } from "next/image";

import { Footer } from "@libs/blog/components/footer";
import { Header } from "@libs/blog/components/header";
import { Navigation } from "@libs/blog/types/navigation";

interface ApplicationLayoutProps {
  avatarImage: StaticImageData;
  routeHome: string;
  links: Navigation[];
  children: React.ReactNode;
}

export const ApplicationLayout = ({
  avatarImage,
  routeHome,
  links,
  children,
}: ApplicationLayoutProps) => {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header avatarImage={avatarImage} routeHome={routeHome} links={links} />
        <main className="flex-auto">{children}</main>
        <Footer links={links} />
      </div>
    </>
  );
};
