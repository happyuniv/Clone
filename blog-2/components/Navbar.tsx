import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import AuthLinks from './AuthLinks'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-5'>
      <div className='flex gap-1'>
        <Image src={'/facebook.png'} alt='facebook' width={24} height={24} />
        <Image src={'/instagram.png'} alt='instagram' width={24} height={24} />
        <Image src={'/tiktok.png'} alt='tiktok' width={24} height={24} />
        <Image src={'/youtube.png'} alt='youtube' width={24} height={24} />
      </div>
      <div className='text-2xl font-bold'>BLOG</div>
      <div className='flex gap-5'>
        <ThemeToggle />
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contact</Link>
        <AuthLinks />
      </div>
    </nav>
  )
}
