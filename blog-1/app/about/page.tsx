import Button from '@/components/Button'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div>
        <div className='relative w-full h-[300px]'>
          <Image
            src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            fill={true}
            alt=''
            className='object-cover'
          />
          <div className='absolute bottom-5 left-5 p-2 bg-green-200 bg-opacity-70'>
            <h1 className=''>Digital Storytellers</h1>
            <h2 className=''>Handcrafting award winning digital experiences</h2>
          </div>
        </div>
        <div className='flex gap-[30px]'>
          <div className='flex-1 flex flex-col gap-5 mt-8'>
            <h1 className='text-3xl font-bold'>Who Are We?</h1>
            <p className='font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              <br />
              <br />
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam
              iure esse tempora beatae, a suscipit eos. Animi quibusdam cum
              omnis officiis voluptatum quo ea eveniet?
            </p>
          </div>
          <div className='flex-1 flex flex-col gap-5 mt-8'>
            <h1 className='text-3xl font-bold'>What We Do?</h1>
            <p className='font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              - Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
            <Button url='/contact' text='Contact' />
          </div>
        </div>
      </div>
    </>
  )
}
