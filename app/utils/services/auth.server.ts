import { Authenticator } from 'remix-auth';
import { createUserSession } from '../session.server';
import { GoogleStrategy, SocialsProvider } from 'remix-auth-socials';
import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';
import { createCookieSessionStorage } from '@remix-run/node';

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set');
}

const sessionStorage = createCookieSessionStorage({
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

export const authenticator = new Authenticator(sessionStorage);

async function handleSocialAuthCallback({ profile }: any) {
  await profile;
  const mutation = gql`
    mutation loginWithGoogle($input: LoginWithGoogleInput) {
      loginWithGoogle(input: $input) {
        id
        name
        avatar
        income
        contact
      }
    }
  `;

  const variables = {
    input: {
      name: profile.name.givenName,
      contact: profile.emails[0].value,
      avatar: profile.photos[0].value,
    },
  };

  const { data } = await graphQLClient.mutate({ mutation, variables });
  const user = JSON.parse(JSON.stringify({ user: data.loginWithGoogle }));
  const redirectTo = '/';
  console.log(user.user.id);
  createUserSession(user.user.id, redirectTo);

  // return profile;
}

authenticator.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.G_CLIENT_ID}`,
      clientSecret: `${process.env.G_CLIENT_SECRET}`,
      scope: ['openid', 'email', 'profile'],
      callbackURL: `http://localhost:3000/auth/${SocialsProvider.GOOGLE}/callback`,
    },
    handleSocialAuthCallback
  )
);
