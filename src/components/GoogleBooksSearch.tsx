import { Box, Combobox, Loader, TextInput, useCombobox } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import { GoogleBook } from '../types/frontend';

async function searchBooks(searchQuery: string, signal: AbortSignal) {
  console.log('SEARCHING...', import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`, { signal });

  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

function GoogleBookOption({ book }: { book: GoogleBook }) {
  return (
    <Combobox.Option value={book.id} key={book.id}>
      <Box>
        <strong>{book.volumeInfo?.title}</strong>
        {book.volumeInfo?.authors && (
          <Box style={{ fontSize: '0.8rem', color: 'gray' }}>
            {book.volumeInfo.authors.join(', ')}
          </Box>
        )}
      </Box>
    </Combobox.Option>
  );
}

export function GoogleBooksSearch() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  // TODO: improve with author, other stuff etc.
  // TODO: make google book search a type
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 300);
  const [results, setResults] = useState<GoogleBook[]>([]);
  const [selectedBook, setSelectedBook] = useState<GoogleBook | null>(null);
  const [empty, setEmpty] = useState(false);
  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    if(!debouncedQuery) {
      setResults([]);
      return;
    }

    abortController.current?.abort();
    abortController.current = new AbortController();

    setLoading(true);

    async function fetchData(signal: AbortController["signal"]) {
      try {
        const data = await searchBooks(debouncedQuery, signal);
        setResults(data.items || []);
        setEmpty(!data.items || data.items.length === 0);
      } catch(e) {
        if (e instanceof Error && e.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          console.error('Error fetching book options:', e);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData(abortController.current.signal);

  }, [debouncedQuery]);

  const options = (results || []).map(book => (
    <GoogleBookOption key={book.id} book={book} />
  ));

  console.log('query', query);
  console.log('debounced query', debouncedQuery);
  console.log('results', results);
  console.log('selectedBook', selectedBook);

  return (
    <Combobox
      onOptionSubmit={bookId => {
        const book = results.find(b => b.id === bookId);
        setSelectedBook(book ?? null);
        setQuery(book?.volumeInfo?.title ?? '');
        combobox.closeDropdown();
      }}
      withinPortal={false}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label='Search for a book'
          placeholder='Start typing book name'
          value={query}
          onChange={e => {
            setQuery(e.currentTarget.value);
            setSelectedBook(null);
            combobox.resetSelectedOption();
            combobox.openDropdown();
            console.log('onChange', e.currentTarget.value);
          }}
          onBlur={() => combobox.closeDropdown()}
          onFocus={() => combobox.openDropdown()}
          rightSection={loading && <Loader size={18} />}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={!options.length}>
        <Combobox.Options>
          {options}
          {empty && <Combobox.Empty>No results found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
