import { createCookieSessionStorage, redirect } from '@remix-run/node';
import { db } from './db.server';

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set');
}

export const storage = createCookieSessionStorage({
  cookie: {
    name: 'Ottelo_session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(userId: Number, redirectTo: string) {
  const session = await storage.getSession();
  try {
    session.set('userId', userId);
  } catch (error) {
    console.log(error);
    return new Error(`'Could not set session', ${error}`);
  }
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get('userId');
  if (!userId || typeof userId !== 'number') return null;
  return userId;
}

export async function getUser(request: Request) {
  console.log(
    await (
      await storage.getSession(request.headers.get('Cookie'))
    ).get('userId')
  );
  const userId = await getUserId(request);
  if (typeof userId !== 'number') return null;
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true },
    });
    return user;
  } catch (error) {
    throw logout(request);
  }
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get('userId');
  if (!userId || typeof userId !== 'number') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
    throw redirect(`/auth/login?${searchParams}`);
  }

  return userId;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect('/login', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  });
}
