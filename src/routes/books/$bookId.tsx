import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchBook } from '../../api/books';
import { Book } from '../../types/database';

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
        The author of the book is {book.author.name}
      </p>
      <Link to='/authors/$authorId' params={{ authorId: book.author.id }}>Go to author</Link>
    </>
  )
}
