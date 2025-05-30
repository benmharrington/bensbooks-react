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

  return (
    <div className='p-2 flex gap-2'>
      <span className='text-2xl font-bold'>Bookstore </span>
      <span className='text-lg font-bold'>{auth?.isAuthenticated ? 'Authenticated' : 'Not Authenticated'} </span>
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
      <Link to='/login'>
        Login
      </Link>{' '}
      <Button
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  )
}
