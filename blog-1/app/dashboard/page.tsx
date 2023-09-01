'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import Image from 'next/image'

export default function Page() {
  const session = useSession()
  const router = useRouter()

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?profile=${session.data?.user?.email}`,
    fetcher
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement & HTMLInputElement[]
    const title = target[0].value
    const desc = target[1].value
    const img = target[2].value
    const content = target[3].value

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        desc,
        img,
        content,
        username: session.data?.user?.email,
      }),
    })
    if (res.ok) {
      mutate()
      target.reset()
    } else {
      console.error(await res.json())
    }
  }

  if (session.status === 'loading') return <p>Loading</p>
  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  if (session.status === 'authenticated')
    return (
      <>
        <div className='flex'>
          <div className='flex-1 flex flex-col'>
            <h2 className='text-2xl font-bold'>My Posts</h2>
            <div className='flex flex-col gap-5 mt-5'>
              {data?.map((post: Post) => (
                <>
                  <div className='flex items-center gap-5'>
                    <div className='relative w-[200px] h-[100px]'>
                      <Image src={post.img} fill alt='post' />
                    </div>
                    <h3>{post.title}</h3>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <h2 className='text-2xl font-bold'>Add New Post</h2>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <input className='p-2 border' placeholder='Title' />
              <input className='p-2 border' placeholder='Desc' />
              <input
                className='p-2 border'
                placeholder='Image Link from pexels.com'
              />
              <textarea
                className='p-2 border'
                rows={10}
                cols={30}
                placeholder='Content'
              />
              <button className='p-3 bg-green-200'>Post</button>
            </form>
          </div>
        </div>
      </>
    )
}
