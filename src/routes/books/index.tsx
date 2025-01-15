import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchBooks } from '../../api/books'
import { Book } from '../../types/database';

export const Route = createFileRoute('/books/')({
  loader: () => fetchBooks(),
  component: BooksIndex,
})

function BooksIndex() {
  const books: Book[] = Route.useLoaderData();

  return (
    <>
      <h3>Books</h3>
      {books.map((book: Book) => (
        <div key={book.id}>
          <Link
            to='/books/$bookId'
            params={{ bookId: book.id }}
            className="[&.active]:font-bold"
          >
            {book.title}
          </Link>
        </div>
      ))}
    </>
  );
}
