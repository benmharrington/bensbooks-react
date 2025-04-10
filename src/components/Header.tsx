import { Link } from '@tanstack/react-router';

export default function Header() {
  // className='[&.active]:font-bold'
  return (
    <div className='p-2 flex gap-2'>
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
      </Link>
    </div>
  )
}
