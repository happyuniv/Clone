import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className='mt-[30px]'>
      <h1 className='text-3xl lg:text-6xl md:text-5xl sm:text-4xl'>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className='flex items-center gap-[50px] mt-[60px]'>
        <div className='relative flex-1 h-[500px]'>
          <Image src='/p1.jpeg' alt='' fill className='object-cover' />
        </div>
        <div className='flex flex-col flex-1 gap-5'>
          <h1 className='text-4xl font-bold'>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className=''>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className='self-start p-3 bg-gray-300'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
