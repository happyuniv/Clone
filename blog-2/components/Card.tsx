import Image from 'next/image'
import Link from 'next/link'
import { Post } from './CardList'

type Props = {
  key: string
  item: Post
}

const Card = ({ key, item }: Props) => {
  return (
    <div className='flex items-center gap-[50px] mb-[50px]' key={key}>
      {item.img && (
        <div className='relative flex-1 h-[350px]'>
          <Image src={item.img} alt='' fill className='object-cover' />
        </div>
      )}
      <div className=''>
        <div className=''>
          <span className='text-gray-400'>
            {item.createdAt.substring(0, 10)} -{' '}
          </span>
          <span className=''>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className=''
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className=''>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
