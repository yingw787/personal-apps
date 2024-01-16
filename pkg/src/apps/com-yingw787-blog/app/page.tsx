"use client";

import { usePathname } from "next/navigation";

import { ROUTE_HOME, ROUTE_ABOUT } from "@apps/com-yingw787-blog/lib/routes";
import { Header } from "@libs/blog/components/header";

const Homepage = () => {
  const currentPath = usePathname();

  return (
    <>
      <Header
        headerTitle="Ying's Personal Blog"
        routeHome={ROUTE_HOME}
        navigation={[
          {
            href: ROUTE_ABOUT,
            title: "About",
            isActive: currentPath === ROUTE_ABOUT,
          },
        ]}
      />
    </>
  );
};

export default Homepage;
