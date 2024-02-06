import React from 'react'
import MenuPosts from './MenuPosts'
import MenuCategories from './MenuCategories'

const Menu = () => {
  return (
    <div className='hidden flex-[2] mt-[60px] lg:block'>
      <h2 className='text-gray-400 text-xs'>{"What's hot"}</h2>
      <h1 className='text-xl'>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className='text-gray-400 text-xs'>Discover by topic</h2>
      <h1 className='text-xl'>Categories</h1>
      <MenuCategories />
      <h2 className='text-gray-400 text-xs'>Chosen by the editor</h2>
      <h1 className='text-xl'>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu
