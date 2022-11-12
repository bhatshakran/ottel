import { Authenticator } from 'remix-auth';
import { storage } from '../session.server';
import { GoogleStrategy, SocialsProvider } from 'remix-auth-socials';

const sessionStorage = storage;

export const authenticator = new Authenticator(sessionStorage);

async function handleSocialAuthCallback({ profile }: any) {
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
