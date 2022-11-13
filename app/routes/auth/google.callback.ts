import type { LoaderFunction } from '@remix-run/node';
import { SocialsProvider } from 'remix-auth-socials';
import { authenticator } from '~/utils/services/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: '/',
    failureRedirect: '/auth/login',
  });
};
