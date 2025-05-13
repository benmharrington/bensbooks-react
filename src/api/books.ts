// for api calls

import { fetchProtectedData } from './auth';

// GET books
export async function fetchBooks(): Promise<string> {
  console.log('Fetching books...');
  const res = await fetchProtectedData(`${import.meta.env.VITE_API_URL}/books`);
  console.log("Response status - fetchBooks:", res);
  return res;
  // if (!res.ok) throw new Error('Failed to fetch books');
  // return await res.json();
}

// GET books/:bookId
export async function fetchBook(bookId: string): Promise<string> {
  try {
    const res = await fetchProtectedData(`${import.meta.env.VITE_API_URL}/books/${bookId}`);
    return res;
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
}
