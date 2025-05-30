import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/authors')({
  beforeLoad: ({ context, location }) => {

    // // TODO: error - race condition with auth provider
    // while (context.auth.checking) {
    //   new Promise(resolve => setTimeout(resolve, 100));
    // }


    // TODO: fix bug where this is triggering before auth is updated after login.

    if(!context.auth.isAuthenticated) {
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
