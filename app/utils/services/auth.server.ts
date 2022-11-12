import { Authenticator } from 'remix-auth';
import { storage } from '../session.server';
import { GoogleStrategy, SocialsProvider } from 'remix-auth-socials';
import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';

const sessionStorage = storage;

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
  console.log(data);
  return profile;
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
