import{ useState } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button, Textarea } from '@mantine/core';
import { createSynopsis } from '../../api/synopses';

export const Route = createFileRoute('/books/$bookId/synopses_/create')({
  component: CreateSynopsis,
})

function CreateSynopsis() {
  const { bookId } = Route.useParams();
  const navigate = useNavigate();
  const [synopsis, setSynopsis] = useState('');
  const [error, setError] = useState('');
  // TODO: figure out how children (outlets) of routes can access the parent route's data

  async function handleSubmit() {
    if(synopsis.length < 10) {
      setError('Synopsis must be at least 10 characters long');
      return;
    }
    console.log(synopsis);
    try {
      const response = await createSynopsis(bookId, synopsis);
      // TODO: add success feedback for user
      navigate({ to: '/books/$bookId', params: { bookId } });

      console.log(response);
    } catch(e) {
      // TODO: real error feedback for user
      console.error('Failed to create synopsis');
      console.error(e);
    }
  }


  return (
    <div>
      <p>Hello '/books/$bookId_/synopses/create'!</p>
      <br />
      <Textarea
        placeholder='Write your synopsis here'
        // todo: label should read book title
        label='Create a Synopsis'
        description='Input description'
        resize='both'
        minRows={8}
        value={synopsis}
        onChange={e => {
          if(error) setError('');
          setSynopsis(e.currentTarget.value);
        }}
        error={error}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
