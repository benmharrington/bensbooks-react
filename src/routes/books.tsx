import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
  // loader: ({ params }) => fetchBooks(params.bookId),
  component: Books,
})

function Books() {
  return (
    <>
      <div>Hello "/books"!</div>
      <Link to="/books" className="[&.active]:font-bold">
        to book index
      </Link>{' '}
      <Link
        to="/books/$bookId"
        params={{ bookId: '2' }}
        className="[&.active]:font-bold"
      >
        to book 2
      </Link>
      <Outlet />
    </>
  )
}
