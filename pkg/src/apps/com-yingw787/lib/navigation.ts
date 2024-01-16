import { ROUTE_HOME, ROUTE_PROJECTS, ROUTE_TOOLCHAIN } from "@apps/com-yingw787/lib/routes";
import { Navigation } from "@libs/blog/types/navigation";

export const createNavigation = (): Navigation[] => {
  const links = [
    {
      href: ROUTE_HOME,
      title: "Home",
    },
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
