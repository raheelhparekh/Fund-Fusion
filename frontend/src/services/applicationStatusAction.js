import { json } from "react-router-dom";
import { toastSuccess, toastError, toastWarning } from "../utils/toast";

export async function applicationStatusAction({ request, params }) {
  const formData = await request.formData();
  const action = formData.get("action")

  try {
    if (action === "accepted") {
      const expenses = JSON.parse(formData.get("expenses"));
      const hasUnverifiedExpense = expenses.some(item => item?.proofStatus !== "verified");
      
      if (hasUnverifiedExpense) {
        toastWarning("Please verify all the proofs before approving");
        return json(
          { message: "Please verify all the proofs before approving" },
          { status: 400 }
        );
      }
    }

    const res = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/validator/statusAction`,
      {
        method: "PUT",
        credentials: "include",
        body: formData,
      }
    );

    if (res.status === 401) {
      return json({ message: "Unauthorized access" }, { status: res.status });
    }

    if (!res.ok) {
      toastError(res.statusText);
      return json({ message: res.statusText }, { status: res.status });
    }

    toastSuccess(`Application ${action.slice(0, 1).toUpperCase() + action.slice(1).toLowerCase()} Successfully`);

    window.location.reload()

    return null;
    
  } catch (error) {
    console.error("Fetch error:", error);
    throw json({ message: error.message }, { status: error.status || 500 });
  }
}
