import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '../api/posts/route'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const posts: Post[] = await (await getPosts()).json()

  return (
    <>
      <p className='mt-10 text-6xl font-extrabold'>
        <span>{posts.length}</span>&nbsp;&nbsp;Posts
      </p>
      <div className='flex flex-col gap-5 mt-20'>
        {posts.map((post) => (
          <>
            <Link href={`/blog/${post._id}`} className='group flex gap-5'>
              <div className='relative w-[400px] h-[250px]'>
                <Image
                  src={post.img}
                  fill
                  alt='post image'
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col gap-5 py-5'>
                <h2 className='text-3xl group-hover:text-green-200'>
                  {post.title}
                </h2>
                <p>{post.desc}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}
