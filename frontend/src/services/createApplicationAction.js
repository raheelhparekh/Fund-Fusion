import { json, redirect } from 'react-router-dom';

export async function createApplicationAction({ request, params }) {
  const formData = await request.formData();

  // Convert FormData to an object
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const res = await fetch('http://localhost:3000/applicant/create-application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ formData: formObject }), // Convert the object to a JSON string
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
