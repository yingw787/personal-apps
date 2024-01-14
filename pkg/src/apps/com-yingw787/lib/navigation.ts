import {
  ROUTE_ABOUT,
  ROUTE_PROJECTS,
  ROUTE_TOOLCHAIN,
} from "@apps/com-yingw787/lib/routes";

export type Navigation = {
  href: string;
  title: string;
};

export const createNavigation = (): Navigation[] => {
  const links = [
    {
      href: ROUTE_ABOUT,
      title: "About",
    },
    {
      href: ROUTE_PROJECTS,
      title: "Projects",
    },
    {
      href: ROUTE_TOOLCHAIN,
      title: "Toolchain",
    },
  ];
  return links;
};
