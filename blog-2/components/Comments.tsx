'use client'

import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const fetcher = async (url: string) => {
  const res = await fetch(url)

  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }

  return data
}

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession()

  const { data, mutate, isLoading } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  )

  const [desc, setDesc] = useState('')

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    })
    mutate()
  }

  return (
    <div className='mt-[50px]'>
      <h1 className='mb-[30px]'>Comments</h1>
      {status === 'authenticated' ? (
        <div className='flex justify-between items-center gap-[30px]'>
          <textarea
            placeholder='write a comment...'
            className='p-[20px]'
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className='p-[20px]' onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className='mb-[50px]'>
        {isLoading
          ? 'loading'
          : data?.map((item: any) => (
              <div className='mb-[50px]' key={item._id}>
                <div className='flex items-center gap-[20px] mb-[20px]'>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=''
                      width={50}
                      height={50}
                      className='rounded-[50%] object-cover'
                    />
                  )}
                  <div className='flex flex-col gap-1'>
                    <span className=''>{item.user.name}</span>
                    <span className='text-sm'>{item.createdAt}</span>
                  </div>
                </div>
                <p className=''>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Comments
