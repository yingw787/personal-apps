import {
  ROUTE_ABOUT,
  ROUTE_FIVE_REGRETS,
  ROUTE_POSTS,
  ROUTE_VALUES,
} from "@apps/com-yingw787-blog/lib/routes";
import { Navigation } from "@libs/blog/types/navigation";

export const createNavigation = (): Navigation[] => {
  const links = [
    {
      href: ROUTE_ABOUT,
      title: "About",
    },
    {
      href: ROUTE_POSTS,
      title: "Posts",
    },
    {
      href: ROUTE_FIVE_REGRETS,
      title: "Regrets",
    },
    {
      href: ROUTE_VALUES,
      title: "Values",
    },
  ];
  return links;
};
