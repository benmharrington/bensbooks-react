import { Anchor, Button, Checkbox, Divider, Group, Paper, PaperProps, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import GoogleButton from './GoogleButton';
import { useState } from 'react';
import { AuthContextType } from '../types/frontend';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from '@tanstack/react-router';

interface AuthenticationFormProps extends PaperProps {
  redirect?: string;
}

export function AuthenticationForm({ redirect, ...props }: AuthenticationFormProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const [loading, setLoading] = useState(false);
  const auth: AuthContextType | undefined = useAuth();
  const navigate = useNavigate();

  // TODO: test redirect
  async function handleSubmit(loginData: { email: string; password: string }) {
    setLoading(true);

    // TODO: change email_address just to email?
    const data = {
      email_address: loginData.email,
      password: loginData.password,
    };

    try {
      await auth?.login(data);

      if (redirect) {
        navigate({ to: redirect });
      } else {
        navigate({ to: '/' });
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      // setError('Login failed. Please check your credentials and try again.');
      setLoading(false);
      return;
    }
  }

  const form = useForm({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: val => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Paper radius='md' p='lg' {...props}>
      <Text size='lg' fw={500}>
        Welcome to Ben&apos;s Books! {upperFirst(type)} with
      </Text>

      <Group grow mb='md' mt='md'>
        <GoogleButton />
      </Group>

      <Divider label='Or continue with email' labelPosition='center' my='lg' />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {type === 'register' && (
            <>
              <TextInput
                label='First Name'
                placeholder='Enter your first name'
                disabled={loading}
                value={form.values.first_name}
                onChange={e => form.setFieldValue('first_name', e.currentTarget.value)}
                radius='md'
              />

              <TextInput
                label='Last Name'
                placeholder='Enter your last name'
                disabled={loading}
                value={form.values.last_name}
                onChange={e => form.setFieldValue('last_name', e.currentTarget.value)}
                radius='md'
              />
            </>
          )}

          <TextInput
            required
            label='Email'
            placeholder='hello@bensbooks.ca'
            value={form.values.email}
            onChange={e => form.setFieldValue('email', e.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius='md'
          />

          <PasswordInput
            required
            label='Password'
            placeholder='Your password'
            value={form.values.password}
            onChange={e => form.setFieldValue('password', e.currentTarget.value)}
            error={form.errors.password && 'Invalid password'}
            radius='md'
          />

          {type === 'register' && (
            <Checkbox
              label='I accept terms and conditions'
              checked={form.values.terms}
              onChange={e => form.setFieldValue('terms', e.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify='space-between' mt='xl'>
          <Anchor component='button' type='button' c='dimmed' onClick={() => toggle()} size='xs'>
            {type === 'register' ? 'Already have an account? Log in' : "Don't have an account? Register"}
          </Anchor>
          <Button type='submit' radius='xl'>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  )
}
