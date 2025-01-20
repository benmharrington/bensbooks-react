import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchBook } from '../../api/books'
import { Book } from '../../types/database'

export const Route = createFileRoute('/books/$bookId/synopses')({
  component: Synopses,
  loader: ({ params: { bookId } }) => fetchBook(bookId),
})

function Synopses() {
  const book: Book = Route.useLoaderData()
  return (
    <div>
      {/* TODO: implement */}
      <p>Here are all the synopses for this book</p>
      <ul>
        {book.synopses.map((synopsis) => (
          <li key={synopsis.id}>
            <p>{synopsis.content}</p>
            <p>
              {synopsis.created_at} by{' '}
              {synopsis?.user?.name ?? 'an anonymous account'}.
            </p>
          </li>
        ))}
      </ul>
      <Link to="/books/$bookId/synopses/create" params={{ bookId: book.id }}>
        Create a new one :)
      </Link>
    </div>
  )
}
