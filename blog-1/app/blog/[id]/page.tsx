import { getPost } from '@/app/api/posts/[id]/route'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const post: Post = await (await getPost(params.id)).json()

  return {
    title: post.title,
    description: post.desc,
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const post: Post = await (await getPost(params.id)).json()
  return (
    <>
      <div>
        <div className='relative w-full h-[300px]'>
          <Image
            src={post.img}
            fill
            alt='post image'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <h1 className='text-3xl'>{post.title}</h1>
          <p className='font-light'>{post.desc}</p>
        </div>
      </div>
    </>
  )
}
