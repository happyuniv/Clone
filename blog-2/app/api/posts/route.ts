import { getAuthSession } from '@/utils/auth'
import prisma from '@/utils/prisma'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

// CREATE A POST
export const POST = async (req: Request) => {
  const session = await getAuthSession()

  if (!session) {
    return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }), {
      status: 401,
    })
  }

  try {
    const body = await req.json()
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
    })

    revalidatePath('/')

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}

