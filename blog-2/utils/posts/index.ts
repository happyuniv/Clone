import prisma from '@/utils/prisma'
import { NextResponse } from 'next/server'

// GET SINGLE POST
export const getPost = async (
  slug:string
) => {
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    })

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}

export const getPosts = async(page: number, cat: string) => {
    const POST_PER_PAGE = 2
    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (Number(page) - 1),
      where: {
        ...(cat && { catSlug: cat }),
      },
    }
  
    try {
      const [posts, count] = await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({ where: query.where }),
      ])
      return new NextResponse(JSON.stringify({ posts, count }), { status: 200 })
    } catch (err) {
      console.log(err)
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong!' }),
        { status: 500 }
      )
    }
  }
  
