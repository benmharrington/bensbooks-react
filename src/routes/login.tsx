import { createFileRoute } from '@tanstack/react-router'
import { AuthenticationForm } from '../components/AuthenticationForm';
import { Box, Group, Image, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const Route = createFileRoute('/login')({
  component: () => <Login />,
  validateSearch: (searchParams: { redirect?: string }) => searchParams,
});

function Login() {
  const { redirect } = Route.useSearch();
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box
      style={{
        maxWidth: '100vw',
        height: '100%',
        backgroundImage: smallScreen ? `url('/src/assets/small-library.jpg')` : 'none',
        backgroundSize: 'cover',
      }}
    >
      <Group
        wrap='nowrap'
        align='stretch'
        style={{ height: '100%' }}
      >
        <Stack
          p={1}
          flex={2}
          justify='center'
        >
          <AuthenticationForm
            m='auto'
            p='md'
            redirect={redirect}
          />
        </Stack>
        <Box flex={3} h='100%' visibleFrom='sm'>
          <Image
            src='/src/assets/small-library.jpg'
            alt='bookshelf'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Group>
    </Box>
  )
}
