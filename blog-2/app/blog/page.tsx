import CardList from '@/components/CardList'
import Menu from '@/components/Menu'

const BlogPage = ({
  searchParams,
}: {
  searchParams: { page: string; cat: string }
}) => {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams

  return (
    <div className=''>
      <h1 className=''>{cat} Blog</h1>
      <div className='flex gap-[50px]'>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
