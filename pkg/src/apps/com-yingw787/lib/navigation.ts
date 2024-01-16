import { ROUTE_PROJECTS, ROUTE_TOOLCHAIN } from "@apps/com-yingw787/lib/routes";

export type Navigation = {
  href: string;
  title: string;
};

export const createNavigation = (): Navigation[] => {
  const links = [
    {
      href: ROUTE_PROJECTS,
      title: "Projects",
    },
    {
      href: ROUTE_TOOLCHAIN,
      title: "Toolchain",
    },
    {
      href: "https://resume.yingw787.com",
      title: "Resume",
    },
    {
      href: "https://dotfiles.yingw787.com",
      title: "Dotfiles",
    },
  ];
  return links;
};
