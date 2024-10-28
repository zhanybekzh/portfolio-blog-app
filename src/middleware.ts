import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|images|static|favicon.ico).*)",
    "/(ru|en|kz)/:path*",
  ],
};
