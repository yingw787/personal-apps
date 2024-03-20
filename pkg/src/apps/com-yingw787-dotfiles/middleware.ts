import { NextRequest, NextResponse } from "next/server";

import {
  ALL_ROUTES,
  ROUTE_REDIRECT_TO,
} from "@apps/com-yingw787-dotfiles/lib/routes";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // If the route does not match existing routes, then redirect them back to the
  // redirect route.
  if (
    !ALL_ROUTES.some(
      (existingRoute) =>
        // Need to do an exact match - pathname does not include any URL
        // parameters, exact match prevents e.g. '/privacy-policyeohuatsueh'
        // from being routed.
        req.nextUrl.pathname === existingRoute,
    )
  ) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = ROUTE_REDIRECT_TO;
    redirectUrl.searchParams.set(`redirectedFrom`, req.url);
    return NextResponse.redirect(redirectUrl);
  } else {
    // Otherwise, forward request to existing route.
    return res;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     *
     * This way, there is no need for a separate 404 route.
     */
    "/((?!api|_next/static|_next/image|images|videos|public|favicon.ico).*)",
  ],
};
