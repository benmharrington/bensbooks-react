import { createFileRoute, Link } from '@tanstack/react-router'
import { Synopsis } from '../../types/database';
import { fetchSynopses } from '../../api/synopses';

export const Route = createFileRoute('/synopses/')({
  loader: () => fetchSynopses(),
  component: SynopsesIndex,
})

function SynopsesIndex() {
  const synopses: Synopsis[] = Route.useLoaderData();

  return (
    <>
      <h3>Synopses</h3>
      <ul>
        {synopses.map((synopsis: Synopsis) => (
          <li key={synopsis.id}>
            <span>{synopsis.id}</span>{' '}
            <span>{synopsis.book.title}</span>{' - '}
            <Link
              to='/synopses/$synopsisId'
              params={{ synopsisId: synopsis.id }}
              className="[&.active]:font-bold"
            >
              {/* TODO: figure out a good way of displaying/titling them */}
              {synopsis.content}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
