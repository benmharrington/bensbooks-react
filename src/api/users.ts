import { NewUser } from '../types/frontend';

// POST user
export async function createUser(user: NewUser) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/registrations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ user }),
  });

  if (!res.ok) {
    throw new Error('Failed to create user');
  }

  return await res.json();
}
