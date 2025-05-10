import axios from "axios";
import { json, redirect } from "react-router-dom";
import { toastError } from "../utils/toast";

async function userDataLoader({ params, request }) {
  try {
    const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/general/dataRoot`, {
      withCredentials: true,
    });

    if (res.status === 401 || res.status === 403) {
      toastError("Unauthorized Access. Please Login.");
      return redirect("/"); // Redirect to login page
    }

    const userRole = res.data.role; 
    const url = new URL(request.url);
    const userRoleInURL = url.pathname.split("/")[1];

    // Role-based route protection
    if (userRoleInURL === "applicant" && userRole !== "Applicant") {
      toastError("Access Denied: Applicant Role Required.");
      return redirect("/");
    }

    if (userRoleInURL === "validator" && userRole !== "Validator") {
      toastError("Access Denied: Validator Role Required.");
      return redirect("/");
    }

    return { data: res.data };

  } catch (error) {
    // Handle errors during the request
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      toastError(error.response?.data?.message || "Unauthorized Access.");
      
      // Log out the user if unauthorized or forbidden
      await fetch(`${import.meta.env.VITE_APP_API_URL}/logout`, {
        method: 'GET',
        credentials: 'include', // Include credentials (cookies) for logout
      });

      return redirect("/"); // Redirect to login page
    }

    // If the error isn't related to authorization, return a network error
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
