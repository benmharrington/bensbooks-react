import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchAuthor } from '../../api/authors'
import { Author, Book } from '../../types/database';

export const Route = createFileRoute('/authors/$authorId')({
  component: AuthorPage,
  loader: ({ params: { authorId } }) => fetchAuthor(authorId),
})

function AuthorPage() {
  const author: Author = Route.useLoaderData();

  return (
    <>
      <div className="p-2">Hello from AuthorPage!</div>
      <p>The author&apos;s name is {author.name}</p>
      <p>Bio: {author.bio}</p>
      <p>Here are the books they&apos;ve written:</p>
      <ul>
        {author.books.map((book: Book) => (
          <li key={book.id}>
            <Link to='/books/$bookId' params={{ bookId: book.id }}>
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
