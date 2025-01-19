import { createFileRoute, Link } from '@tanstack/react-router'
import { Synopsis } from '../../types/database'
import { fetchSynopsis } from '../../api/synopses'
import { parseDateFull } from '../../utils/date-time';


// TODO: add error handling for not found books
export const Route = createFileRoute('/synopses/$synopsisId')({
  component: SynopsisPage,
  loader: ({ params: { synopsisId } }) => fetchSynopsis(synopsisId),
})

function SynopsisPage() {
  const synopsis: Synopsis = Route.useLoaderData();

  return (
    <>
      <p>{`here is synopsis ${synopsis.id}!`}</p>
      <p>It is for book <Link to='/books/$bookId' params={{ bookId: synopsis.book.id }}>{synopsis.book.title}</Link>.</p>
      <p>{synopsis.content}</p>
      <p>{parseDateFull(synopsis.created_at)} by {synopsis?.user?.name ?? 'an anonymous account'}.</p>
      {/* implement user pages */}
      {/* <Link to='/authors/$authorId' params={{ authorId: synopsis.user.id }}>Go to user</Link> */}
    </>
  )
}
