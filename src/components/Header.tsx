import { Link, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types/frontend';
import { Button } from '@mantine/core';

export default function Header() {
  const auth: AuthContextType | undefined = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await auth?.logout();
      navigate({ to: '/' });
    } catch (error) {
      // TODO: snackbar
      console.error('Logout error:', error);
    }
  }

  if(!auth?.authenticatedUser) {
    return null;
  }

  return (
    <>

      <div className='p-2 flex gap-2'>
        <span className='text-lg font-bold'>{auth?.checking ? '' : auth?.authenticatedUser ? `Hello, ${auth?.authenticatedUser?.first_name}` : 'Not Authenticated'} </span>
        <Link to='/'>
          Home
        </Link>{' '}
        <Link to='/about'>
          About
        </Link>{' '}
        <Link to='/books'>
          Books
        </Link>{' '}
        <Link to='/authors'>
          Authors
        </Link>{' '}
        <Link to='/synopses'>
          All Synopses
        </Link>{' '}
        <Button
          color='pumpkin'
          onClick={async () => {
            try {
              await auth?.checkAuth();
            } catch (error) {
              console.error('Error checking auth status:', error);
            }
          }}
        >
          Status
        </Button>
        <Link to='/login'>
          Login
        </Link>{' '}
        <Button
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <hr />
    </>
  )
}
