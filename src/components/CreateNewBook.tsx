import { Box, Button, Divider, MultiSelect, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { GoogleBooksSearch } from './GoogleBooksSearch';
import { GoogleBook } from '../types/frontend';

export default function CreateNewBook({ initialName }: { initialName: string | null }) {
  async function handleSubmit(formData: {
    title: string;
    author: string;
    year: number | null;
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
      year: null,
      series: '',
      googleBookId: '',
      genres: [],
    },
  });

  // when selected book changes, I want to update all the blank values in the form to matching values from the selected book object, if possible

  function handleSelectedBookChange(book: GoogleBook | null) {
    if(book) {
      form.setValues({
        title: book.volumeInfo?.title,
        author: book.volumeInfo?.authors?.[0] || '',
        googleBookId: book.id,
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
          <TextInput label='Author' {...form.getInputProps('author')} />
          {/* TODO: proper year input */}
          <NumberInput label='Year' {...form.getInputProps('year')} />
          {/* TODO: implement series */}
          <TextInput label='Series' {...form.getInputProps('series')} />
          <TextInput label='Google Book ID' {...form.getInputProps('googleBookId')} />
          <MultiSelect
            label='Genres'
            data={['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy']}
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
