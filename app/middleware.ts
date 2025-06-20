import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') ?? '';
  const subdomain = hostname.match(/^([^.]+)\./)?.[1];

  if (subdomain) {
    switch (true) {
      case subdomain.startsWith('sket'):
        return NextResponse.rewrite(new URL(`/sketchin${req.nextUrl.pathname}`, req.url));
    }
  }

  return NextResponse.next();
}
