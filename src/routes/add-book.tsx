import { Box, Text } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router'
import { Book } from '../types/database';
import { fetchBooks } from '../api/books';
import { SearchBooksWithCreateOption } from '../components/SearchBooksWithCreateOption';

export const Route = createFileRoute('/add-book')({
  component: AddBook,
  loader: () => fetchBooks(),
});

function AddBook() {
  const books: Book[]= Route.useLoaderData();

  return (
    <Box>
      <Text>Add a new book - Admins only</Text>
        <SearchBooksWithCreateOption books={books} />
    </Box>
  );
}
