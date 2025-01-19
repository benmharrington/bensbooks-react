import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '../utils/RouterDevTools';
import { Suspense } from 'react';
import Header from '../components/Header';


export const Route = createRootRoute({
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
