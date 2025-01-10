import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/books/$bookId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>here is book $bookId!</div>
  );
}
