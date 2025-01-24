import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchAuthors } from '../../api/authors'
import { Author } from '../../types/database';

export const Route = createFileRoute('/authors/')({
  component: AuthorsIndex,
  loader: () => fetchAuthors(),
})

function AuthorsIndex() {
  const authors: Author[] = Route.useLoaderData();

  return (
    <>
      <p>Authors Index</p>
      <ul>
        {authors.map((author: Author) => (
          <li key={author.id}>
            <Link to='/authors/$authorId' params={{ authorId: author.id }}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
