import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const locales = ["en", "th"];
<<<<<<< Updated upstream
const publicPages = ["/", "/login", "/announcement", "/courses/master-degree-course", "/courses/phd-course"];
=======
// const publicPages = ["/", "/login", "/announcement", "/courses"];
const protectedPages = ["/admin"]
>>>>>>> Stashed changes

const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale: "en",
});

const authMiddleware = withAuth(
    // Note that this callback is only invoked if
    // the `authorized` callback has returned `true`
    // and not for pages listed in `pages`.
    function onSuccess(req) {
        return intlMiddleware(req);
    },
    {
        callbacks: {
            authorized: ({ token }) => token != null,
        },
        pages: {
            signIn: "/login",
        },
    }
);

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (protectedPages.some(route => pathname.startsWith(route))) {
    // Apply authentication middleware to protected routes
    return (authMiddleware as any)(req);
  } else {
    // For public routes or any other routes, apply intlMiddleware
    return intlMiddleware(req);
  }
}

// export default function middleware(req: NextRequest) {
//     const publicPathnameRegex = RegExp(
//         `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
//         "i"
//     );
//     const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
//     console.log(isPublicPage)

//     if (isPublicPage) {
//         return intlMiddleware(req);
//     } else {
//         return (authMiddleware as any)(req);
//     }
// }

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
