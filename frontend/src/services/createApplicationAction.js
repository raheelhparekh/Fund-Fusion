import { json, redirect } from 'react-router-dom';

export async function createApplicationAction({ request }) {
  const formData = await request.formData();

  try {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/applicant/create-application`, {
      method: 'POST',
      credentials: 'include',
      body: formData
    });

    if (res.status === 401) {
      throw json({ message: 'Unauthorized access' }, { status: res.status });
    }

    if (!res.ok) {
      const errorData = await res.text();
      alert(errorData)
      return null
    }

    return redirect("../dashboard");
  } catch (error) {
    console.error('Fetch error:', error);
    throw json({ message: error.message }, { status: error.status || 500 });
  }
}