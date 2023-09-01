import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-sm'>@Copyright 2023</p>
        <div className='flex gap-1'>
          <Image src={'/1.png'} width={25} height={25} alt='social' />
          <Image src={'/2.png'} width={25} height={25} alt='social' />
          <Image src={'/3.png'} width={25} height={25} alt='social' />
          <Image src={'/4.png'} width={25} height={25} alt='social' />
        </div>
      </div>
    </>
  )
}
