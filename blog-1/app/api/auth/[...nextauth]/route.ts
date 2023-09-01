import User from '@/models/User'
import connect from '@/utils/db'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          await connect()

          const user = await User.findOne({ email: credentials!.email })
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials!.password,
              user.password
            )

            if (isPasswordCorrect) return user as any
            else throw new Error('Wrong Credentials')
          }
          throw new Error('User not found!')
        } catch (e) {
          throw new Error('Internal Server Error')
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
