import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div>
        <h1 className='text-6xl text-green-200 font-extrabold'>
          Choose a gallery
        </h1>
        <div className='flex gap-10 mt-10'>
          <Link
            href={'/portfolio/illustraion'}
            className='group relative w-[300px] h-[400px] border-4 border-green-200 bg-[url("/illustration.png")] bg-cover'
          >
            <span className='text-2xl text-white font-bold  absolute bottom-2 left-2 group-hover:text-green-200'>
              Illustration
            </span>
          </Link>
          <Link
            href={'/portfolio/websites'}
            className='group relative w-[300px] h-[400px] border-4 border-green-200 bg-[url("/websites.jpg")] bg-cover'
          >
            <span className='text-2xl text-white  font-bold  absolute bottom-2 left-2 group-hover:text-green-200'>
              Websites
            </span>
          </Link>
          <Link
            href={'/portfolio/applications'}
            className='group relative w-[300px] h-[400px] border-4 border-green-200 bg-[url("/apps.jpg")] bg-cover'
          >
            <span className='text-2xl text-white  font-bold  absolute bottom-2 left-2 group-hover:text-green-200'>
              Applications
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
