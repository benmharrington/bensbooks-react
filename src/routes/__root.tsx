import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '../utils/RouterDevTools';
import { Suspense } from 'react';
import Header from '../components/Header';
import { AuthContextType } from '../types/frontend';

interface MyRouterContext {
  auth: AuthContextType
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools/>
      </Suspense>
    </>
  ),
})
