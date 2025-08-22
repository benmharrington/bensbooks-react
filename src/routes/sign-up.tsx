import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { AuthContextType } from '../types/frontend'

export const Route = createFileRoute('/sign-up')({
  component: SignUp,
})

function SignUp() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const auth: AuthContextType | undefined = useContext(AuthContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      first_name: formData.get('first_name') as string,
      last_name: formData.get('last_name') as string,
      email_address: formData.get('email') as string,
      password: formData.get('password') as string,
      password_confirmation: formData.get('password_confirmation') as string,
    }

    // TODO: handle errors for frontend
    // TODO: redirect to the prev page? or home probably + some kind of feedback for user
    try {
      await auth?.signUp(data);
      navigate({ to: '/' });
    } catch {
      setError('Failed to create user')
    } finally {
      setLoading(false);
    }
  }

  // TODO: convert to mantine
  // TODO: add back required to all inputs
  return (
    <>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:
        <input type="email" name="email" />
      </label>
        <label>First Name:
        <input type="text" name="first_name" />
      </label>
        <label>Last Name:
        <input type="text" name="last_name" />
      </label>
        <label>Password:
        <input type="password" name="password" />
      </label>
        <label>Confirm Password:
        <input type="password" name="password_confirmation" />
      </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {/* TODO */}
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
      {/* TODO */}
      <p>
        Already have an account? <a href="/sign-in">Sign In</a>
      </p>
      {/* TODO */}
      <p>
        By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
      </p>
    </>
  )
}
