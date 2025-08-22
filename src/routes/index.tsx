import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth'
import { AuthContextType } from '../types/frontend';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const auth: AuthContextType | undefined = useAuth();
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {auth?.authenticatedUser && <p>You are logged in as {auth?.authenticatedUser?.first_name}</p>}
    </div>
  )
}
