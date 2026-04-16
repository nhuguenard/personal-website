import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/request';

export function proxy( req: NextRequest ){
  const {pathname, origin} = req.nextUrl;

  if( pathname !== pathname.toLowerCase()) {
    return NextResponse.redirect( new URL( origin + pathname.toLowerCase() + req.nextUrl.search ));
  }

  return NextResponse.next();
}