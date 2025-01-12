import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchBooks } from '../../api/books'
import { Book } from '../../types/database';

export const Route = createFileRoute('/books/')({
  loader: () => fetchBooks(),
  component: RouteComponent,
})

function RouteComponent() {
  const books: Book[] = Route.useLoaderData();

  return (
    <>
      <h3>Books</h3>
      {books.map((book) => (
        <div key={book.id}>
          <Link
            to='/books/$bookId'
            params={{ bookId: book.id }}
            className="[&.active]:font-bold"
          >
            {book.name}
          </Link>
        </div>
      ))}
    </>
  );
}
