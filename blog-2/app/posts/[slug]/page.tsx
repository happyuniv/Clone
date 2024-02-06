import Comments from '@/components/Comments'
import Menu from '@/components/Menu'
import { getPost } from '@/utils/posts'
import Image from 'next/image'

const getData = async (slug: string) => {
  const res = await getPost(slug)

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const data = await getData(slug)

  return (
    <div className=''>
      <div className='flex items-center gap-[50px]'>
        <div className='flex-1'>
          <h1 className='mb-[50px] text-[64px]'>{data?.title}</h1>
          <div className='flex items-center gap-[20px]'>
            {data?.user?.image && (
              <div className='relative w-[50px] h-[50px]'>
                <Image
                  src={data.user.image}
                  alt=''
                  fill
                  className='rounded-[50%] object-cover'
                />
              </div>
            )}
            <div className='flex flex-col gap-1'>
              <span className='text-sm font-medium'>{data?.user.name}</span>
              <span className=''>{data.createdAt}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className='relative flex-1 h-[350px]'>
            <Image src={data.img} alt='' fill className='object-cover' />
          </div>
        )}
      </div>
      <div className='flex gap-[50px]'>
        <div className='flex-[5] mt-[60px]'>
          <div className='' dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <div className=''>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
