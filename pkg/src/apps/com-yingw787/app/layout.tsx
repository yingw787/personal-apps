import "$/global.css";

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

// The html <head> title and description metadata.
export const metadata: Metadata = {
  title: "Ying Wang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The head should be programmatically generated using the NextJS metadata API - see: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons */}
      <link rel="icon" href="/images/logo_cat.jpg" sizes="any" />
      <body className={playfair_display.className}>{children}</body>
    </html>
  );
}
