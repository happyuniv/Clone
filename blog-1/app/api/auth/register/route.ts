import User from '@/models/User'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    await connect()

    const { email, password } = await request.json()
    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = new User({ email, password: hashedPassword })
    await newUser.save()

    return NextResponse.json('User has been created', { status: 201 })
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
