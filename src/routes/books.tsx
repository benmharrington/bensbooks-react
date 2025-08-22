import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export const Route = createFileRoute('/books')({

  component: Books,
})

function Books() {
  const auth = useContext(AuthContext);
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
