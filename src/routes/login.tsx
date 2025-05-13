import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react';
import { loginUser } from '../api/auth';

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      const response = await loginUser(data);
      console.log('Login response:', response);
      if (response) {
        navigate({ to: '/' });
      } else {
        setError('Login failed');
        console.error('Login failed');
      }
    } catch (error: string | unknown) {
      console.error('Login error:', error);
      setError(typeof error === 'string' ? error : 'Failed to login');
    } finally {
      setLoading(false);
    }
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
