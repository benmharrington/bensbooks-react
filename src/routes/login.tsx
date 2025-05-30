import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react';
import { AuthContextType } from '../types/frontend';
import { useAuth } from '../hooks/useAuth';

export const Route = createFileRoute('/login')({
  component: Login,
  validateSearch: (searchParams: { redirect?: string }) => searchParams,
})

function Login() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth: AuthContextType | undefined = useAuth();
  const { redirect } = Route.useSearch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      email_address: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    try {
      await auth?.login(data);
    } catch(error: string | unknown) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials and try again.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (redirect) {
        navigate({ to: redirect });
      } else {
        navigate({ to: '/' });
      }
    }, 100);
  }

  // TODO: convert to mantine
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label> Email:
          <input type="email" name="email" required />
        </label>
        <label> Password:
          <input type="password" name="password" required />
        </label>
        <button type='submit' disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>Don't have an account? <Link to='/sign-up'>Sign up</Link></p>
      <p>Forgot your password? <Link to='/forgot-password'>Reset it</Link></p>
      <p>Or <Link to='/'>go back</Link> to the home page.</p>
    </>
  )
}
