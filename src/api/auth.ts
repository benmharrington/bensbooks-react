import { NewAuthor } from '../types/frontend';

export async function fetchProtectedData(route: string): Promise<string> {
  const response = await fetch(route, {
    credentials: 'include',
  });

  console.log('fetchProtectedData response:', response);

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

  console.log("Response status - protected data:", response.status);

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
  console.log('postProtectedData response:', response);
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
  console.log("Response status - postProtectedData:", response.status);
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
    console.log('loginUser response:', sessionData);
    return sessionData;
  } else {
    const errorData = await response.json();
    console.log('loginUser error:', errorData);
    throw new Error(errorData?.error || 'Failed to log in');
  }
}

export async function refreshAccessToken() {
  console.log('Refreshing access token...');
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tokens/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  console.log('Response status - refreshAccessToken:', response.status);
  console.log(response);

  if (!response.ok) {
    throw new Error('Failed to refresh access token');
  }

  // TODO: remove
  console.log('Access token refreshed successfully');
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

  console.log('Logout successful');
  return response.json();
}
