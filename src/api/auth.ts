import { NewAuthor } from '../types/frontend';

export async function fetchProtectedData(route: string): Promise<string> {
  const response = await fetch(route, {
    credentials: 'include',
  });

  if (response.status === 401) {
    // Token expired, try refreshing it
    try {
      await refreshAccessToken();

      const retryResponse = await fetch(route, {
        credentials: 'include',
      });

      if (!retryResponse.ok) {
        throw new Error('Failed to fetch protected data after refreshing token');
      }

      return await retryResponse.json();
    } catch (error) {
      console.error('Error fetching protected data', error);
      throw error;
    }
  }

  if (!response.ok) {
    // TODO: Handle errors properly
    throw new Error('Failed to fetch protected data');
  }

  return await response.json();
}

export async function postProtectedData(route: string, data: NewAuthor): Promise<string> {
  const response = await fetch(route, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    // Token expired, try refreshing it
    try {
      await refreshAccessToken();

      const retryResponse = await fetch(route, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!retryResponse.ok) {
        throw new Error('Failed to post protected data after refreshing token');
      }

      return await retryResponse.json();
    } catch (error) {
      console.error('Error posting protected data', error);
      throw error;
    }
  }

  if (!response.ok) {
    // TODO: Handle errors properly
    throw new Error('Failed to fetch protected data');
  }

  return await response.json();
}


// POST session
export async function loginUser(data: { email_address: string; password: string; }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/sessions`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const sessionData = await response.json();
    return sessionData;
  } else {
    const errorData = await response.json();
    throw new Error(errorData?.error || 'Failed to log in');
  }
}

export async function refreshAccessToken() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tokens/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to refresh access token');
  }
}

export async function logoutUser(): Promise<void> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/sessions`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.error || 'Failed to log out');
  }

  return response.json();
}
