import { NextResponse } from 'next/server';

export const middleware = async (request: Request) => {
    const basicAuth = request.headers.get('authorization');
    const users = new Map(JSON.parse(process.env.AUTHORIZED_USERS || "[]"));

    if (basicAuth) {
        const auth = atob(basicAuth.split(' ')[1]);
        const [user, pwd] = auth.split(':');
        const authorizedUser = users.get(user);
        if (authorizedUser && pwd === authorizedUser) {
            return NextResponse.next();
        }
    }

    return new NextResponse('Authentication Required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
};

export const config = {
    matcher: ['/', '/:path*'],
};