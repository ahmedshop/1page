import { NextResponse } from "next/server";

const isHomeRoute = (req: Request) => {
    const url = new URL(req.url);
    return url.pathname === "/";
};

const middleware = (req: Request) => {
    if (isHomeRoute(req)) {
        return NextResponse.next(); // Allow access to the home route
    }

    // Default to allowing all other routes
    return NextResponse.next();
};

export default middleware;

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
