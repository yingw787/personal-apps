import "$/global.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";

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
          "flex flex-col min-h-[100vh] bg-base3 dark:bg-base03",
          ibmPlexMono.className,
        )}
      >
        <div className="flex w-full">{children}</div>
      </body>
    </html>
  );
}
