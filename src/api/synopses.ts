// for api calls

// GET synopses
export async function fetchSynopses(): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/synopses`);
  if (!res.ok) throw new Error('Failed to fetch synopses');
  return await res.json();
}

// GET synopses/:synopsisId
export async function fetchSynopsis(synopsisId: string): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/synopses/${synopsisId}`);

  if (!res.ok) throw new Error(`Failed to fetch synopsis ${synopsisId}, in fetchSynopsis`);
}

// POST synopses
export async function createSynopsis(bookId: string, content: string): Promise<string> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/synopses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book_id: bookId,
      content,
    }),
  });

  if (!res.ok) throw new Error('Failed to create synopsis');
  return await res.json();
}
