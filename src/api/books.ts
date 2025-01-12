// for api calls

// GET books
export async function fetchBooks(): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/books`);
  if (!res.ok) throw new Error('Failed to fetch books');
  return await res.json();
}

// GET books/:bookId
export async function fetchBook(bookId: string): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/books/${bookId}`);

  if (!res.ok) throw new Error(`Failed to fetch book ${bookId}, in fetchBook`);
  return await res.json();
}
