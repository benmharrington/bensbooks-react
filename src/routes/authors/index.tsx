import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authors/')({
  component: AuthorsIndex,
})

function AuthorsIndex() {
  return <div>Hello "/authors/"!</div>
}
