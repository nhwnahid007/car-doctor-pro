import NextAuth from 'next-auth';
import credentialsProvider from 'next-auth/providers/credentials';
import googleProvider from 'next-auth/providers/google';
import githubProvider from 'next-auth/providers/github';
import bcrypt from 'bcrypt';
import { connectDb } from '../../../../lib/connectDb';
const handler = NextAuth({
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
  providers: [
    credentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDb();
        const currentUser = await db.collection('users').findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatched = await bcrypt.compare(
          password,
          currentUser.password,
        );
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
    googleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    githubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {},
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };