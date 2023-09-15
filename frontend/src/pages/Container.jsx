
export default function Container({ Component }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Component/>
      </div>
    </>
  )
}