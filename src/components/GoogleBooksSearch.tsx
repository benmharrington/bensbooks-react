import { Autocomplete } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';

export function GoogleBooksSearch() {
  // TODO: improve with author, other stuff etc.
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [autocompleteData, setAutocompleteData] = useState<string[]>([]);
  const [debounced] = useDebouncedValue(autocompleteValue, 200, { leading: true });
  const [selected, setSelected] = useState<unknown>(null);

  console.log(autocompleteValue);
  console.log('selected', selected);
  // TODO: select the actual book, not just the string value that gets returned

  const searchBooks = useCallback(async () => {
    console.log('Searching for books with query:', debounced);

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${debounced}`);
      const data = await response.json();
      return data?.items?.map((item: { id: unknown; volumeInfo?: { title?: string } }, index: number) => `${item?.volumeInfo?.title} (${index}) - ${item?.id || index}`) || [];
    } catch (error) {
      console.error('Error searching for books:', error);
      return [];
    }
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
    <Autocomplete
      label="Select Book"
      placeholder="Start typing book name"
      data={autocompleteData || []}
      value={autocompleteValue}
      onChange={v => setAutocompleteValue(v)}
      onOptionSubmit={option => setSelected(option)}
    />
  );
}
