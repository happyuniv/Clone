import prisma from '@/utils/prisma'
import { NextResponse } from 'next/server'

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany()

    return NextResponse.json(categories, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    )
  }
}
