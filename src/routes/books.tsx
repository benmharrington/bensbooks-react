import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
  beforeLoad: ({ context, location }) => {
    if(!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        }
      })
    }
  },
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
