import { json, redirect } from 'react-router-dom';

export async function createApplicationAction({ request }) {
  const formData = await request.formData();

  try {
    const res = await fetch('http://localhost:3000/applicant/create-application', {
      method: 'POST',
      credentials: 'include',
      body: formData
    });

    if (res.status === 401) {
      throw json({ message: 'Unauthorized access' }, { status: res.status });
    }

    if (!res.ok) {
      throw json({ message: res.statusText }, { status: res.status });
    }

    return redirect("../dashboard");
  } catch (error) {
    console.error('Fetch error:', error);
    throw json({ message: error.message }, { status: error.status || 500 });
  }
}