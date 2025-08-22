import { NewAuthor } from '../types/frontend';
import { fetchProtectedData, postProtectedData } from './auth';
// for api calls

// GET authors
export async function fetchAuthors(): Promise<string> {
  return await fetchProtectedData(`${import.meta.env.VITE_API_URL}/authors`);
}

// GET authors/:authorId
export async function fetchAuthor(authorId: string): Promise<string> {
  return await fetchProtectedData(`${import.meta.env.VITE_API_URL}/authors/${authorId}`);
}

// GET authors/:authorId/books
export async function fetchAuthorBooks(authorId: string): Promise<string> {
  return await fetchProtectedData(`${import.meta.env.VITE_API_URL}/authors/${authorId}/books`);
}

// POST authors
export async function createAuthor(author: NewAuthor): Promise<string> {
  const res = await postProtectedData(`${import.meta.env.VITE_API_URL}/authors`, author);

  return res;
}
