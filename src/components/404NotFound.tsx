import { Link } from '@tanstack/react-router';

export default function NotFound() {
  return (
    <>
      <h4>404 Not Found</h4>
      <h4>
        We&apos;re sorry, but the page you requested was not found.
      </h4>
      <Link to="/">Go home</Link>
    </>
  );
}
