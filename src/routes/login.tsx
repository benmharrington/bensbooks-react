import { createFileRoute } from '@tanstack/react-router'
import { AuthenticationForm } from '../components/AuthenticationForm';
import { Text } from '@mantine/core';

// TODO: add nice background image?
export const Route = createFileRoute('/login')({
  component: () => <Login />,
  validateSearch: (searchParams: { redirect?: string }) => searchParams,
});

function Login() {
  const { redirect } = Route.useSearch();

  return (
    <>
      <Text>Login</Text>
      <AuthenticationForm p='md' redirect={redirect} />
    </>
  )
}
