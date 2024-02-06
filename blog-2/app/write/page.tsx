'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import ReactQuill from 'react-quill'
import app from '@/utils/firebase'

const WritePage = () => {
  const { status } = useSession()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [media, setMedia] = useState('')
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')

  useEffect(() => {
    const storage = getStorage(app)
    const upload = () => {
      const name = new Date().getTime() + file!.name
      const storageRef = ref(storage, name)

      const uploadTask = uploadBytesResumable(storageRef, file!)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL)
          })
        }
      )
    }

    file && upload()
  }, [file])

  if (status === 'loading') {
    return <div className=''>Loading...</div>
  }

  if (status === 'unauthenticated') {
    router.push('/')
  }

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || 'style', //If not selected, choose the general category
      }),
    })

    if (res.status === 200) {
      const data = await res.json()
      router.push(`/posts/${data.slug}`)
    }
  }

  return (
    <div className='flex flex-col relative'>
      <input
        type='text'
        placeholder='Title'
        className='p-[50px] border-none outline-none text-6xl'
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className='ml-[50px] mb-[50px] px-[20px] py-[10px] w-max'
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value='style'>style</option>
        <option value='fashion'>fashion</option>
        <option value='food'>food</option>
        <option value='culture'>culture</option>
        <option value='travel'>travel</option>
        <option value='coding'>coding</option>
      </select>
      <div className='flex gap-[20px] relative h-[700px]'>
        <button
          className='flex justify-center items-center w-[36px] h-[36px] rounded-[50%]'
          onClick={() => setOpen(!open)}
        >
          <Image src='/plus.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className='flex justify-center gap-3 absolute -top-10 rounded-[50%]'>
            <input
              type='file'
              id='image'
              onChange={(e) => setFile(e.target.files![0])}
              style={{ display: 'none' }}
            />
            <button className='flex justify-center items-center w-[36px] h-[36px] rounded-[50%]'>
              <label htmlFor='image'>
                <Image src='/image.png' alt='' width={32} height={32} />
              </label>
            </button>
            <button className='flex justify-center items-center w-[36px] h-[36px] rounded-[50%]'>
              <Image src='/external.png' alt='' width={32} height={32} />
            </button>
            <button className='flex justify-center items-center w-[36px] h-[36px] rounded-[50%]'>
              <Image src='/video.png' alt='' width={32} height={32} />
            </button>
          </div>
        )}
        <ReactQuill
          className=''
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Tell your story...'
        />
      </div>
      <button
        className='absolute top-0 right-0 px-[20px] py-[10px] border-none text-white bg-[#1a8917]'
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  )
}

export default WritePage
