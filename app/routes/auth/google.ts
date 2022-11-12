import type { ActionFunction } from '@remix-run/node';
import { SocialsProvider } from 'remix-auth-socials';
import { authenticator } from '~/utils/services/auth.server';

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: '/',
    failureRedirect: '/auth/login',
  });
};