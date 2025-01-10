import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router';
import './index.css'

// TODO: pull books index from backend (using loader)
// TODO: pull specific book from backend (using loader)
// TODO: add mantine
// TODO: add logins/auth


// Import the generated route tree
import { routeTree } from './routeTree.gen.ts';
import NotFound from './components/404NotFound.tsx';

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
