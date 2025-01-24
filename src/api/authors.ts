import { NewAuthor } from '../types/frontend';
// for api calls

// GET authors
export async function fetchAuthors(): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/authors`);
  if (!res.ok) throw new Error('Failed to fetch authors');
  return await res.json();
}

// GET authors/:authorId
export async function fetchAuthor(authorId: string): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`);

  if (!res.ok) throw new Error(`Failed to fetch author ${authorId}, in fetchauthor`);
  return await res.json();
}

// GET authors/:authorId/books
export async function fetchAuthorBooks(authorId: string): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}/books`);

  if (!res.ok) throw new Error(`Failed to fetch author ${authorId}, in fetchAuthorBooks`);
  return await res.json();
}

// POST authors
export async function createAuthor(author: NewAuthor): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/authors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(author),
  });

  if (!res.ok) throw new Error('Failed to create author');
  return await res.json();
}
