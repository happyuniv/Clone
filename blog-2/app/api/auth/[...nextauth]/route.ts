import NextAuth, { getServerSession } from 'next-auth/next'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import { Adapter } from 'next-auth/adapters'
import prisma from '@/utils/prisma'

const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions)

const getAuthSession = () => getServerSession(authOptions)

export { handler as GET, handler as POST, getAuthSession }
