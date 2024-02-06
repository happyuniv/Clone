import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  withImage: boolean
}

const MenuPosts = ({ withImage }: Props) => {
  return (
    <div className='flex flex-col gap-5 py-5'>
      <Link href='/' className=''>
        {withImage && (
          <div className='relative w-[100px] h-[100px]'>
            <Image src='/p1.jpeg' alt='' fill className='' />
          </div>
        )}
        <div className=''>
          <span className='px-[8px] py-[3px] text-xs text-white category-travel'>
            Travel
          </span>
          <h3 className='text-lg font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className=''>John Doe</span>
            <span className=''> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className=''>
        {withImage && (
          <div className='relative w-[100px] h-[100px]'>
            <Image src='/p1.jpeg' alt='' fill className='' />
          </div>
        )}
        <div className=''>
          <span className='px-[8px] py-[3px] text-xs text-white category-culture'>
            Culture
          </span>
          <h3 className='text-lg font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className=''>John Doe</span>
            <span className='text-gray-500'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className=''>
        {withImage && (
          <div className='relative w-[100px] h-[100px]'>
            <Image src='/p1.jpeg' alt='' fill className='' />
          </div>
        )}
        <div className=''>
          <span className='px-[8px] py-[3px] text-xs text-white category-food'>
            Food
          </span>
          <h3 className='text-lg font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className=''>John Doe</span>
            <span className=''> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className=''>
        {withImage && (
          <div className='relative w-[100px] h-[100px]'>
            <Image src='/p1.jpeg' alt='' fill className='' />
          </div>
        )}
        <div className=''>
          <span className='px-[8px] py-[3px] text-xs text-white category-fashion'>
            Fashion
          </span>
          <h3 className='text-lg font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className=''>John Doe</span>
            <span className=''> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts
