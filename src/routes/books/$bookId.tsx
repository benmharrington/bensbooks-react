import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { fetchBook } from '../../api/books';
import { Book } from '../../types/database';
import { parseDateFull } from '../../utils/date-time';

// TODO: add error handling for not found books
export const Route = createFileRoute('/books/$bookId')({
  component: BookPage,
  loader: ({ params: { bookId } }) => fetchBook(bookId),
  // onError: (error) => {
  //   // Log the error
  //   console.error('in loader', error);
  // },
  // onCatch: (error) => {
  //   // Log the error
  //   console.error('in loader on catch', error);
  // }
})

function BookPage() {
  const book: Book = Route.useLoaderData();

  return (
    <>
      <p>
        {`here is book ${book.id}!`}
      </p>
      <p>
        The title of the book is {book.title}
      </p>
      <p>
        The author of the book is <Link to='/authors/$authorId' params={{ authorId: book.author.id }}>{book.author.name}</Link>
      </p>
      <p>{book.current_synopsis?.content ?? 'Sorry, no synopses for this book found.'}</p>
      {book.current_synopsis?.user ? <p>{parseDateFull(book.current_synopsis.created_at)} by {book.current_synopsis?.user?.name ?? 'an anonymous account'}.</p> : null}
      {/* TODO: implement user pages */}
      {/* <Link to='/authors/$authorId' params={{ authorId: book.current_synopsis.user.id }}>Go to user</Link> */}
      <br />
      {/* TODO: implement below - (default book.current_synopsis) */}
      <Link to='/books/$bookId/synopses' params={{ bookId: book.id }}>See all synopses created for this book</Link>
      <Outlet />
    </>
  )
}
