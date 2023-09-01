import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div>
        <h1 className='text-5xl text-center'>Let&apos;s Keep In Touch</h1>
        <div className='flex gap-20 mt-5 p-10'>
          <div className='flex-1'>
            <div className='relative w-full h-full'>
              <Image src={'/contact.png'} fill alt='contact' />
            </div>
          </div>
          <div className='flex-1'>
            <form className='flex flex-col gap-2'>
              <input
                type='text'
                placeholder='name'
                className='p-3 border border-green-200'
              />
              <input
                placeholder='email'
                className='p-3 border border-green-200'
              />
              <textarea
                rows={10}
                placeholder='message'
                className='p-3 border border-green-200'
              />
              <button className='bg-green-200'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
