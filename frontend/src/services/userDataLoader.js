import axios from "axios";
import { json, redirect } from "react-router-dom";

async function userDataLoader({ params, request }) {
  try {
    const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/general/dataRoot`, {
      withCredentials: true,
    });

    if (res.status === 401 || res.status === 403) {
      alert("Unauthorized Access. Please Login.");
      return redirect("/");
    }

    const userRole = res.data.role;
    const url = new URL(request.url);
    const userRoleInURL = url.pathname.split("/")[1];

    // Route protection based on role and route id
    if (userRoleInURL === "applicant" && userRole !== "Applicant") {
      alert("Access Denied: Applicant Role Required.");
      return redirect("/");
    }

    if (userRoleInURL === "validator" && userRole !== "Validator") {
      alert("Access Denied: Validator Role Required.");
      return redirect("/");
    }

    return { data: res.data };
  } catch (error) {
    if (error.status === 401 || error.status === 403) {
      alert(error.response?.data?.message);
      await fetch(`${import.meta.env.VITE_APP_API_URL}/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      return redirect("/");
    }

    throw json(
      {
        message:
          error.response?.data?.message ||
          "Network error. Please try again later.",
        status: error.response?.status || 500,
      },
      { status: error.response?.status || 500 }
    );
  }
}

export default userDataLoader;
