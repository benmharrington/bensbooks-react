import { Box, Divider, Text } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { auth } = Route.useRouteContext();

  return (
    <Box p={2}>
      <Text>Welcome Home!</Text>
      <Divider />
      <Box p={2}>
        <Link to='/add-book'>Add Book</Link>
      </Box>
      <Box p={2}>
        <Text>My Books</Text>
      </Box>
      <Divider />
      {auth?.authenticatedUser && <Text>You are logged in as {auth?.authenticatedUser?.first_name}</Text>}
    </Box>
  );
}
