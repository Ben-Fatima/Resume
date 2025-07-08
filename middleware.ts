import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DEFAULT_LOCALE = '/en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ignore internal and API routes
  if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  // root path → /en
  if (pathname === '/' || pathname === '') {
    const url = req.nextUrl.clone();
    url.pathname = DEFAULT_LOCALE;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

/* restrict the matcher so the middleware doesn't run on static assets */
export const config = {
  matcher: ['/', '/((?!_next|api).*)'] // first slash + any non-static route
};
