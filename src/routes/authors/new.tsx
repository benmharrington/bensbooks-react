import { createFileRoute } from '@tanstack/react-router'
import { createAuthor } from '../../api/authors';
import type { NewAuthor } from '../../types/frontend';

export const Route = createFileRoute('/authors/new')({
  component: NewAuthor,
})

function NewAuthor() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const data: NewAuthor = {
      name: formData.get('name') as string,
      bio: formData.get('bio') as string,
    }

    // TODO: handle errors
    // TODO: redirect to the new author's page? some kind of feedback for user
    await createAuthor(data);
  }

  return (
    <>
      <h2>New Author</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <label>
          Bio:
          <textarea name='bio' />
        </label>
        <button type='submit' >Create Author</button>
      </form>
    </>
  )
}
