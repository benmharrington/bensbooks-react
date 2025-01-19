import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/synopses')({
  // loader: ({ params }) => fetchBooks(params.bookId),
  component: Synopses,
})

function Synopses() {
  return (
    <>
      <div>Hello "/synopses"!</div>
      <Outlet />
    </>
  )
}
