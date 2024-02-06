import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Category = {
  id: string
  title: string
  img: string
  slug: string
}

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const CategoryList = async () => {
  const data: Category[] = await getData()
  return (
    <div className=''>
      <h1 className='my-[50px] text-2xl font-bold'>Popular Categories</h1>
      <div className='flex flex-wrap justify-between gap-5'>
        {data?.map((item) => (
          <Link
            href='/blog?cat=style'
            className={`category-${item.slug} flex justify-center items-center gap-2 w-[15%] h-[80px] rounded-[10px] capitalize`}
            key={item.id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=''
                width={32}
                height={32}
                className='rounded-[50%] aspect-square'
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
