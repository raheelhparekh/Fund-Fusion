import { json, redirect } from "react-router-dom";

async function fetchUserData(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status === 401 || res.status === 403) {
      alert('Unauthorized Access. Please Login.');
      return redirect('http://localhost:5173');  
    }

    if (!res.ok) {
      throw json(
        {
          status: res.status,
          statusText: res.statusText,
        }
      );
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export const applicantLoader = () => fetchUserData('http://localhost:3000/applicant/root');
export const validatorLoader = () => fetchUserData('http://localhost:3000/validator/root');
