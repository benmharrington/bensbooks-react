import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/authors')({
  component: Authors,
})

function Authors() {
  return (
    <>
      <div>Hello '/authors'!</div>
      <Link to='/authors' className='[&.active]:font-bold'>
        to author index
      </Link>{' '}
      <Link
        to='/authors/$authorId'
        params={{ authorId: '2' }}
        className='[&.active]:font-bold'
      >
        to author 1
      </Link>{' '}
      <Link to='/authors/new'>Create new author</Link>
      <Outlet />
    </>
  )
}
