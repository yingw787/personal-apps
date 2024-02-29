import "$/global.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { ApplicationProvider } from "@libs/blog/contexts/application-context";
import { ApplicationLayout } from "@libs/blog/components/application-layout";

import { createNavigation } from "@apps/com-yingw787-bytes/lib/navigation";
import avatarImage from "@apps/com-yingw787-bytes/public/images/picture_guido_cropped.jpg";
import { ROUTE_HOME } from "@apps/com-yingw787-bytes/lib/routes";

const ibmPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ying's Cooking Notes",
  description: "Cooking notes. No bullshit.",
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
          "flex h-full bg-zinc-50 dark:bg-black",
          ibmPlexMono.className,
        )}
      >
        <ApplicationProvider>
          <div className="flex w-full">
            <ApplicationLayout
              avatarImage={avatarImage}
              routeHome={ROUTE_HOME}
              links={createNavigation()}
              theme="default"
            >
              {children}
            </ApplicationLayout>
          </div>
        </ApplicationProvider>
      </body>
    </html>
  );
}
