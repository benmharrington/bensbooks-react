import { Box, Button, Divider, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { createAuthor } from '../api/authors';
import { NewAuthor } from '../types/frontend';
import { isValidURL } from '../utils/validate';


export default function CreateNewAuthor({ initialName, close }: { initialName: string | null; close: () => void }) {
  async function handleSubmit(formData: NewAuthor) {
    try {
      await createAuthor(formData);
      close();
    } catch (error: unknown) {
      console.error('Error creating new author:', error);
    }
  }

  const authorForm = useForm({
    initialValues: {
      name: initialName || '',
      full_name: '',
      birthdate: '',
      deathdate: '',
      birthplace: '',
      link: '',
      bio: '',
    },

    validate: {
      deathdate: value => {
        const birthdate = authorForm.values.birthdate;
        if (value && birthdate && new Date(value) < new Date(birthdate)) {
          return 'Deathdate cannot be before birthdate';
        }
        return null;
      },
      link: value => (value && !isValidURL(value) ? 'Invalid URL' : null),
    }
  });

  return (
    <Box>
      <Text>Create new author here - {initialName}</Text>
      <Divider my='lg' />
      <form onSubmit={authorForm.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput required label='Name' {...authorForm.getInputProps('name')} />
          <TextInput label='Full Name' {...authorForm.getInputProps('full_name')} />
          <TextInput label='Birthplace' {...authorForm.getInputProps('birthplace')} />
          <TextInput label='Link' {...authorForm.getInputProps('link')} />
          <DateInput label='Birthdate' {...authorForm.getInputProps('birthdate')} />
          <DateInput label='Deathdate' {...authorForm.getInputProps('deathdate')} />
          <Textarea label='Bio' minRows={4} autosize {...authorForm.getInputProps('bio')} />
        </Stack>
        <Divider my='lg' />
        <Button type='submit'>
          Create Author
        </Button>
      </form>
    </Box>
  );
}
