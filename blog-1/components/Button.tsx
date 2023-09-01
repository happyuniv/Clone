import Link from 'next/link'

type props = {
  text: string
  url: string
}

export default function Button({ text, url }: props) {
  return (
    <>
      <Link href={url}>
        <button className='p-3 bg-green-200 bg-opacity-50'>{text}</button>
      </Link>
    </>
  )
}
