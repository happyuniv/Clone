import Button from '@/components/Button'
import Image from 'next/image'
import Hero from 'public/hero.png'

export default function Page() {
  return (
    <>
      <div className='flex items-center gap-[100px]'>
        <div className='flex-1 flex flex-col gap-7'>
          <h1 className='text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-pink-600'>
            Better design for your digital products.
          </h1>
          <p>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <div className='flex justify-center'>
            <Button url='/portfolio' text='See Our Works' />
          </div>
        </div>
        <div className='flex-1'>
          <Image
            src={Hero}
            alt='hero'
            className='w-full h-[500px] object-contain'
          />
        </div>
      </div>
    </>
  )
}
