import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/new')({
  component: NewBook,
})

function NewBook() {
  return (
    <>
      <h3>New Book</h3>
      {/* <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label> */}
    </>
  );
}
