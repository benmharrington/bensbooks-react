import { Autocomplete, Box, Button, Divider, Group, Text, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { auth } = Route.useRouteContext();
  const [searchBox, setSearchBox] = useState('');
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [autocompleteData, setAutocompleteData] = useState<string[]>([]);
  const [debounced] = useDebouncedValue(autocompleteValue, 200, { leading: true });


  const searchBooks = useCallback(async () => {
    console.log('Searching for books with query:', debounced);

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${debounced}`);
      const data = await response.json();
      return data?.items?.map((item: { id: unknown; volumeInfo?: { title?: string } }, index: number) => `${item?.volumeInfo?.title} (${item?.id || index})`) || [];
    } catch (error) {
      console.error('Error searching for books:', error);
      return [];
    }

    return []
  }, [debounced]);

  useEffect(() => {
    if (!debounced) {
      setAutocompleteData([]);
      return;
    }

    searchBooks().then((data) => {
      setAutocompleteData(data);
    });
  }, [debounced, searchBooks, setAutocompleteData]);

  return (
    <Box p={2}>
      <Text>Welcome Home!</Text>
      <Divider />
      <Box p={2}>
        <Text>My Books</Text>
      </Box>
      <Divider />
      <Box p={2}>
        <Autocomplete
          label="Your favorite library"
          placeholder="Pick value or enter anything"
          data={autocompleteData || []}
          value={autocompleteValue}
          onChange={v => setAutocompleteValue(v)}
        />
      </Box>
      <Group p={2}>
        <TextInput
          label='Search Books'
          description='Search for a book by title'
          placeholder='Search for a book here'
          value={searchBox}
          onChange={e => setSearchBox(e.currentTarget.value)}
        />
        <Button
          onClick={searchBooks}
        >
          Search
        </Button>
      </Group>
      {auth?.authenticatedUser && <Text>You are logged in as {auth?.authenticatedUser?.first_name}</Text>}
    </Box>
  );
}
