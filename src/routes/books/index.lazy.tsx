import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/books/')({
  // loader: ({ params }) => fetchBooks(params),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Index of books!</div>
}
