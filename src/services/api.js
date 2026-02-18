const API_URL = "http://127.0.0.1:8000";

export async function fetchProjects() {
    const token = localStorage.getItem("access");

    const reponse = await fetch(`${API_URL}/api/projects`,{
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });

    if (!Response.ok) {
        throw new Error("Failed to fetch projects");
    }

    return Response.json();
}