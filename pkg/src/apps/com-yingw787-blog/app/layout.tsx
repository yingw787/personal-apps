import "$/global.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { ApplicationProvider } from "@libs/blog/contexts/application-context";
import { ApplicationLayout } from "@libs/blog/components/application-layout";

import { createNavigation } from "@apps/com-yingw787-blog/lib/navigation";
import avatarImage from "@apps/com-yingw787-blog/public/images/logo_kate.jpg";
import { ROUTE_HOME } from "@apps/com-yingw787-blog/lib/routes";

const ibmPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ying Wang's Personal Blog",
  description: "Sprouting dendrites over here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={twMerge(
          "flex h-full bg-base3 dark:bg-base03",
          ibmPlexMono.className,
        )}
      >
        <ApplicationProvider>
          <div className="flex w-full">
            <ApplicationLayout
              avatarImage={avatarImage}
              routeHome={ROUTE_HOME}
              links={createNavigation()}
            >
              {children}
            </ApplicationLayout>
          </div>
        </ApplicationProvider>
      </body>
    </html>
  );
}
