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

  if (!res.ok) throw new Error(`Failed to fetch synopsis ${synopsisId}, in fetchBook`);
  return await res.json();
}
