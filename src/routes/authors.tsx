import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/authors')({
  beforeLoad: ({ context, location }) => {
    console.log('before load /authors')
    console.log('context', context)
    // TODO: error - race condition with auth provider
    if(!context.auth.isAuthenticated) {
      console.log('not authenticated')
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        }
      })
    }
  },
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
