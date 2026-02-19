const API_URL = "http://127.0.0.1:8000";

export async function fetchProjects() {
  try {
    const response = await fetch(`${API_URL}/api/projects/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await response.json();
  } catch (err) {
    console.error("Backend error response: ", err);
    throw err;
  }
}
