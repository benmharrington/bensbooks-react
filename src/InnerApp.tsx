import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useAuth } from './hooks/useAuth';
import { routeTree } from './routeTree.gen';
import NotFound from './components/404NotFound';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  defaultNotFoundComponent: NotFound
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />
}
