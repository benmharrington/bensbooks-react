// for api calls

// GET authors
export async function fetchAuthors(): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/books`);
  if (!res.ok) throw new Error('Failed to fetch books');
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
