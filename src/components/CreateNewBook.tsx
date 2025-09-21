import { Box, Button, Divider, MultiSelect, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { GoogleBooksSearch } from './GoogleBooksSearch';
import { GoogleBook } from '../types/frontend';
import { YearPickerInput } from '@mantine/dates';
import { AuthorSearch } from './AuthorSearch';
import { useEffect, useState } from 'react';
import { Author } from '../types/database';
import { fetchAuthors } from '../api/authors';

const GENRES = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery'];

export default function CreateNewBook({ initialName }: { initialName: string | null }) {
  // on component mount, fetch authors from database using fetchAuthors()
  const [authors, setAuthors] = useState<Author[]>([]);

  async function getAuthors(): Promise<void> {
    try {
      const data = await fetchAuthors();
      console.log(data);
      setAuthors(data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  }

  useEffect(() => {
    getAuthors();
  }, []);

  async function handleSubmit(formData: {
    title: string;
    author: string;
    year: string;
    series: string;
    googleBookId: string;
    genres: string[];
  }) {

    try {
      // TODO
      console.log(formData);
    } catch (error: unknown) {
      console.error('Error creating new book:', error);
    }
  }

  const form = useForm({
    initialValues: {
      title: initialName || '',
      author: '',
      year: '',
      series: '',
      googleBookId: '',
      genres: [] as string[],
    },
  });

  function handleSelectedBookChange(book: GoogleBook | null) {
    console.log(book);
    if(book) {
      form.setValues({
        title: book.volumeInfo?.title,
        author: book.volumeInfo?.authors?.[0] || '',
        googleBookId: book.id,
        year: book?.volumeInfo?.publishedDate,
        genres: (book?.volumeInfo?.categories || []).filter(category => GENRES.includes(category)),
      });
    }
  }

  return (
    <Box>
      {/* Create a mantine form here with values for title, author, year first published, series (if any), cover?, google book id, genres */}
      {/* GOOGLE BOOK SEARCH INPUT */}
      <Text>create new book component here {initialName}</Text>
      <Divider my='sm' />

      <Box>
        <Text pb={4}>Search Google Books to autopopulate and find google id</Text>
        <GoogleBooksSearch
          selectBook={(book: GoogleBook | null) => handleSelectedBookChange(book)}
        />
      </Box>

      <Divider my='lg' />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput label='Title' {...form.getInputProps('title')} />

          {/* TODO: find author */}
          {/* <TextInput label='Author' {...form.getInputProps('author')} /> */}
          <AuthorSearch authors={authors || []} />
          {/* TODO: proper year input */}
          <YearPickerInput
            label='Year'
            {...form.getInputProps('year')}
          />
          {/* TODO: implement series */}
          <TextInput label='Series' {...form.getInputProps('series')} />
          <TextInput label='Google Book ID' {...form.getInputProps('googleBookId')} />
          {/* TODO: pull from genres table */}
          <MultiSelect
            label='Genres'
            data={GENRES}
            {...form.getInputProps('genres')}
          />
        </Stack>
        <Button type='submit'>
          Create Book
        </Button>
      </form>
    </Box>
  );
}
