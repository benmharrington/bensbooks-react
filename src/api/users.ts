import { NewUser } from '../types/frontend';

// POST user
export async function createUser(user: NewUser): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  // TODO: Handle errors properly
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Failed to create user');
  }

  return await res.json();
}
