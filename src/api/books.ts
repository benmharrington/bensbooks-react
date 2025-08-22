// for api calls

import { fetchProtectedData } from './auth';

// GET books
export async function fetchBooks(): Promise<string> {
  try {
    return await fetchProtectedData(`${import.meta.env.VITE_API_URL}/books`);
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

// GET books/:bookId
export async function fetchBook(bookId: string): Promise<string> {
  try {
    return await fetchProtectedData(`${import.meta.env.VITE_API_URL}/books/${bookId}`);
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
}
