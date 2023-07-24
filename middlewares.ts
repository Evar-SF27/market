import { NextResponse } from 'next/server'

export function middleware(req: { headers: { get: (arg0: string) => any } }) {
    const origin = req.headers.get('origin')

    const response = NextResponse.next()
    response.headers.set("Access-Control-Allow-Origin", /^https?:\/\/(www\.)?(localhost:3000)$/i.test(origin) ? origin : "")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    response.headers.set("Access-Control-Max-Age", "86400")

    return response
}

export const config = {
    matcher: "/api/:path*"
}