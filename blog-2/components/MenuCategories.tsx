import Link from 'next/link'
import React from 'react'

const MenuCategories = () => {
  return (
    <div className='flex gap-2 py-5'>
      <Link
        href='/blog?cat=style'
        className='px-[8px] py-[3px] text-white category-style'
      >
        Style
      </Link>
      <Link
        href='/blog'
        className='px-[8px] py-[3px] text-white category-fashion'
      >
        Fashion
      </Link>
      <Link href='/blog' className='px-[8px] py-[3px] text-white category-food'>
        Food
      </Link>
      <Link
        href='/blog'
        className='px-[8px] py-[3px] text-white category-travel'
      >
        Travel
      </Link>
      <Link
        href='/blog'
        className='px-[8px] py-[3px] text-white category-culture'
      >
        Culture
      </Link>
      <Link
        href='/blog'
        className='px-[8px] py-[3px] text-white category-coding'
      >
        Coding
      </Link>
    </div>
  )
}

export default MenuCategories
