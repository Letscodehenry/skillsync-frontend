const API_URL = "http://127.0.0.1:8000";

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/api/projects/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
