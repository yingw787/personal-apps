import "$/global.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { ApplicationProvider } from "@libs/blog/contexts/application-context";
import { ApplicationLayout } from "@libs/blog/components/application-layout";

import { createNavigation } from "@apps/com-yingw787/lib/navigation";
import avatarImage from "@apps/com-yingw787/public/images/logo_cat.jpg";
import { ROUTE_HOME } from "@apps/com-yingw787/lib/routes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Ying Wang",
    default: "Ying Wang",
  },
  description: "The only thing I know is that I know nothing.",
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
            >
              {children}
            </ApplicationLayout>
          </div>
        </ApplicationProvider>
      </body>
    </html>
  );
}
