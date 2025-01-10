import { createLazyFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/books')({
  // loader: ({ params }) => fetchBooks(params.bookId),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/books"!</div>
      <Link to="/books" className="[&.active]:font-bold">
        to book index
      </Link>{' '}
      <Link
        to="/books/$bookId"
        params={{ bookId: '4' }}
        className="[&.active]:font-bold"
      >
        to book 4
      </Link>
      <Outlet />
    </>
  )
}
