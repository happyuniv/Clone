'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  page: number
  hasPrev: boolean
  hasNext: boolean
}

const Pagination = ({ page, hasPrev, hasNext }: Props) => {
  const router = useRouter()

  return (
    <div className='flex justify-between'>
      <button
        className='p-4 w-[100px] bg-orange-300'
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`,{scroll:false})}
      >
        Previous
      </button>
      <button
        className='p-4 w-[100px] bg-orange-300'
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`,{scroll:false})}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
