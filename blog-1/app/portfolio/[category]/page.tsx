export default function Page({ params }: { params: { category: string } }) {
  return (
    <>
      <div>
        <h1>{params.category}</h1>
      </div>
    </>
  )
}
