import {
  ROUTE_ABOUT,
  ROUTE_HOME,
  ROUTE_RECIPES,
} from "@apps/com-yingw787-cooking/lib/routes";
import { Navigation } from "@libs/blog/types/navigation";

export const createNavigation = (): Navigation[] => {
  const links = [
    {
      href: ROUTE_HOME,
      title: "Home",
    },
    {
      href: ROUTE_ABOUT,
      title: "About",
    },
    {
      href: ROUTE_RECIPES,
      title: "Recipes",
    },
  ];
  return links;
};
