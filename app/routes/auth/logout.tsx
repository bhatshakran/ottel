import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { authenticator } from '~/utils/services/auth.server';
import { logout } from '~/utils/session.server';

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: '/' });
  return logout(request);
};

export const loader: LoaderFunction = async () => {
  return redirect('/');
};
