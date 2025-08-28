import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '../utils/RouterDevTools';
import { Suspense } from 'react';
import Header from '../components/Header';
import { AuthContextType } from '../types/frontend';
import { Box, Flex } from '@mantine/core';

interface MyRouterContext {
  auth: AuthContextType
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {

    return (
      <>
        <Flex
          direction='column'
          style={{ height: '100vh' }}
        >
          <Header />
          <Box flex={1}><Outlet /></Box>
        </Flex>
        <Suspense>
          <TanStackRouterDevtools/>
        </Suspense>
      </>
    );
  },
})
