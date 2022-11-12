import { Authenticator } from 'remix-auth';
import { storage } from '../session.server';

const sessionStorage = storage;

export const authenticator = new Authenticator(sessionStorage);
