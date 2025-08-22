import { Button } from '@mantine/core';

// TODO: make this work
export default function GoogleButton({ label = 'Sign in with Google '}) {
  return (
    <Button
      fullWidth
      variant='outline'
      onClick={() => console.log('Google me Chuck')}
    >
      {label}
    </Button>
  );
}
