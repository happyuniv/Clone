import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { getPosts } from '@/utils/posts'

type Props = {
  page: number
  cat: string
}

export type Post = {
  _id: string
  title: string
  desc: string
  img: string
  slug: string
  catSlug: string
  createdAt: string
}

const getData = async (page: number, cat: string) => {
  const res = await getPosts(page,cat)
  
  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const CardList = async ({ page, cat }: Props) => {
  const { posts, count }: { posts: Post[]; count: number } = await getData(
    page,
    cat
  )

  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className='flex-[5]'>
      <h1 className='my-[50px] text-xl font-bold'>Recent Posts</h1>
      <div className=''>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList
