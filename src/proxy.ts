import { NextResponse, type NextRequest } from "next/server";
import { getWorkCaseStudyBySlug } from "./lib/works";

export function proxy(request: NextRequest) {
  const slug = decodeURIComponent(request.nextUrl.pathname.split("/")[2] ?? "");

  if (!getWorkCaseStudyBySlug(slug)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/works/:slug",
};
