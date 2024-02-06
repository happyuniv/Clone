import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'

export default function Home({
  params,
  searchParams,
}: {
  params: { page: string }
  searchParams: { cat: string }
}) {
  const page = parseInt(params.page) || 1
  const cat = searchParams.cat || ''
  return (
    <main className=''>
      <Featured />
      <CategoryList />
      <div className='flex gap-[50px]'>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </main>
  )
}
