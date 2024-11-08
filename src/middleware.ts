import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|images|public|favicon|files|static|sitemap.xml|robots.txt).*)",
    "/(ru|en|kz)/:path*",
  ],
};
