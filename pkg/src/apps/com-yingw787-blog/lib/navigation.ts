import { ROUTE_POSTS } from "@apps/com-yingw787-blog/lib/routes";
import { Navigation } from "@libs/blog/types/navigation";

export const createNavigation = (): Navigation[] => {
  const links = [
    {
      href: ROUTE_POSTS,
      title: "Posts",
    }
  ];
  return links;
};
