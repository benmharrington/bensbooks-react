import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// TODO: add a synopsis to existing book
// TODO: edit a synopsis of an existing book
// TODO: see all synopses of a book - & user who made them
// TODO: delete a synopsis of an existing book
// TODO: add a new book
// TODO: edit an existing book (description, author, etc);
// TODO: delete an existing book
// TODO: add a new author
// TODO: see all books by author
// TODO: add error handling from api calls
// TODO: make it look nice - mobile
// TODO: make it look nice - desktop
// TODO: add logins/auth
// TODO: approval of synopses by admin users
// TODO: search/pagination of books
// TODO: search/pagination of authors
// TODO: handle multiple/different versions/publications of specific books - e.g. different editions (maybe w/ books api?)
// TODO: google books api?


// can i force push?


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
