import { json } from 'react-router-dom';

export async function createApplicationAction({ request }) {
  const formData = await request.formData();

  try {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/applicant/create-application`, {
      method: 'POST',
      credentials: 'include',
      body: formData
    });

    if (res.status === 401) {
      return json({ message: 'Unauthorized access' }, { status: res.status });
    }

    if (!res.ok) {
      const errorData = await res.text();
      return json({ message: errorData }, { status: res.status });
    }

    return null;

  } catch (error) {
    console.error('Fetch error:', error);
    return json({ message: error.message || 'An unexpected error occurred' }, { status: error.status || 500 });
  }
}
