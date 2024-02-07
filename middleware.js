import { NextResponse } from 'next/server'
import {getSession, setSession} from "@/utils/session";

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    let token = getSession('token')

    if (token)
        return NextResponse.next()

    return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/home/:path*',
}