import Post from '@/models/Post'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

export async function getPosts(username?: string | null) {
  try {
    await connect()
    const posts = await Post.find(username ? { username } : {})

    return NextResponse.json(posts, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const username = url.searchParams.get('profile')

  return getPosts(username)
}

export async function POST(request: Request) {
  try {
    await connect()

    const body = await request.json()
    const newPost = new Post(body)
    await newPost.save()
    return NextResponse.json(newPost, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
