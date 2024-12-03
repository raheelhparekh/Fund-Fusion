import { json, redirect } from "react-router-dom";

export async function applicationStatusAction({ request, params }) {
    
    const formData = await request.formData();
    const applicationId = formData.get('applicationId');
    const action = formData.get('action');

    try {
        const res = await fetch( `${import.meta.env.VITE_APP_API_URL}/validator/${applicationId}/${action}` , {
            method: 'PUT',
            credentials: 'include'
        });

        if (res.status === 401) {
            throw json({ message: 'Unauthorized access' }, { status: res.status });
        };
    
        if (!res.ok) {
        throw json({ message: res.statusText }, { status: res.status });
        };

        return window.location.reload();;

    } catch (error) {
        console.error('Fetch error:', error);
        throw json({ message: error.message }, { status: error.status || 500 });
    }

}
