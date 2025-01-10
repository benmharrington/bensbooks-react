import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/$bookId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>here is book $bookId!</div>
}
