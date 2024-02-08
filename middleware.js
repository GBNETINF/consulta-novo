import { NextResponse } from 'next/server'
import userAuth from '@/utils/auth/userAuth'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    let session = request.cookies.get('session')?.value

    if (!await userAuth(session))
        return NextResponse.redirect(new URL('/login', request.url))

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/home/:path*',
}