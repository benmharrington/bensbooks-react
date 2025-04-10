import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// TODO: add a new book
// TODO: delete an existing book
// TODO: add error handling from api calls
// TODO: add logins/auth
// TODO: edit a synopsis of an existing book - same author or admins only
// TODO: delete a synopsis of an existing book - same author or admins only
// TODO: edit an existing book (description, author, etc) - admins only
// TODO: add restrictions for updating/deleting synopses/books/authors if not logged in etc.
// TODO: make it look nice - mobile
// TODO: make it look nice - desktop
// TODO: approval of synopses by admin users
// TODO: approval of deletions, editing books etc by admin users
// TODO: search/pagination of books
// TODO: search/pagination of authors
// TODO: handle multiple/different versions/publications of specific books - e.g. different editions (maybe w/ books api?)
// TODO: google books api?
// TODO: voting/rating of synopses
// TODO: search by authors/prevent duplicates
// TODO: search by books/prevent duplicates



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
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
