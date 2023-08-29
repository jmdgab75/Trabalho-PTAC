import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {
    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = validateToken(token);
    const urlDashboard = new URL('/pages/dashboard', request.url);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            const userName = "John Doe"; // Replace this with the actual user's name
            localStorage.setItem("userName", userName); // Store user's name in localStorage
            return NextResponse.redirect(urlDashboard);
        }
    }
    
    NextResponse.next();
};

export const config = {
    matcher: ['/', '/pages/dashboard']
};
