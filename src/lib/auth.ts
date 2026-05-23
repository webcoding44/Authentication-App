import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { db } from '../db';
import { headers } from 'next/headers';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg', // or "pg" or "mysql"
  }),
  pages: {
    signIn: 'login',
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
    emailAndPassword: {
    enabled: true,
  },
});

export const getsession = async () =>
  auth.api.getSession({
    headers: await headers(),
  });
