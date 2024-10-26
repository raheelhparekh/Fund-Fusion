import axios from "axios";
import { json, redirect } from "react-router-dom";

async function userDataLoader() {
  try {
    const res = await axios.get('http://localhost:3000/general/dataRoot', {
      withCredentials: true,
    });

    if (res.status === 401 || res.status === 403) {
      alert('Unauthorized Access. Please Login.');
      return redirect('/');
    }
    
    return { data: res.data };
  } catch (error) {
    console.error('Fetch error:', error);

    throw json(
      {
        message: error.response?.data?.message || "Network error. Please try again later.",
        status: error.response?.status || 500,
      },
      { status: error.response?.status || 500 }
    );
  }
}

export default userDataLoader;
