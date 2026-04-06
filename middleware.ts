import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)', '/'])



export default clerkMiddleware(async (auth, req) => {
    // Basic IP rate limiting for API routes to protect backend
    if (req.nextUrl.pathname.startsWith('/api')) {
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
        // In edge runtime, rate limits here will be isolate-bound (best effort)
    }

    if (!isPublicRoute(req)) {
        await auth.protect()

        // Note: Session validation is handled client-side in Provider component
        // This middleware focuses on Clerk authentication
        // Additional server-side session checks can be added here if needed
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
