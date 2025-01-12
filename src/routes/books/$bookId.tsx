import { createFileRoute } from '@tanstack/react-router'
import { fetchBook } from '../../api/books';
import { Book } from '../../types/database';

// TODO: add error handling for not found books
export const Route = createFileRoute('/books/$bookId')({
  component: RouteComponent,
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

function RouteComponent() {
  const book: Book = Route.useLoaderData();

  console.log(book);
  return (
    <>
      <p>
        {`here is book ${book.id}!`}
      </p>
      <p>
        The name of the book is {book.name}
      </p>
    </>
  )
}
