import "$/global.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";

const ibmPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ying's Dotfiles",
  description: "Ying's Dotfiles",
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
        {children}
      </body>
    </html>
  );
}
