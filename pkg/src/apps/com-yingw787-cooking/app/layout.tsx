import "$/global.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { ApplicationProvider } from "@libs/blog/contexts/application-context";
import { ApplicationLayout } from "@libs/blog/components/application-layout";

import { createNavigation } from "@apps/com-yingw787-bytes/lib/navigation";
import avatarImage from "@apps/com-yingw787-bytes/public/images/picture_guido_cropped.jpg";
import { ROUTE_HOME } from "@apps/com-yingw787-bytes/lib/routes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ying's Cooking Notes",
  description: "Ying's Cooking Notes",
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
          inter.className,
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
