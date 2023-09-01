import Post from '@/models/Post'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

export async function getPost(id: string) {
  try {
    await connect()

    const posts = await Post.findById(id)
    return NextResponse.json(posts, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return getPost(params.id)
}
