export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='text-gray-400 text-3xl font-bold'>Our Works</h1>
      {children}
    </>
  )
}
