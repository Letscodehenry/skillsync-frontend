// import { useEffect, useState } from "react";
// import { fetchProjects } from "../services/api";
// import "../styles/Projects.css";

// export default function Projects() {
//   const [projects, setProjects] = useState(null);

//   useEffect(() => {
//     async function loadProjects() {
//       try {
//         const data = await fetchProjects();
//         setProjects(data);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     loadProjects();
//   }, []);

//   if (!projects) return <p>Loading projects...</p>;

//   if (projects.length === 0) return <p>No projects yet.</p>;

//   return (
//     <div className="projects-container">
//       <h1>Projects</h1>

//       <table className="projects-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th>Owner</th>
//           </tr>
//         </thead>

//         <tbody>
//           {projects.map(project => (
//             <tr key={project.id}>
//               <td>{project.title}</td>
//               <td>{project.description}</td>
//               <td>{project.status}</td>
//               <td>{project.owner}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import { useState } from "react";
// import CreateProjectModal from "../components/CreateProjectModal";

// export default function Projects() {
//   const API_URL = "http://127.0.0.1:8000";

//   await fetch(`${API_URL}/api/projects/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("access")}`,
//     },
//     body: JSON.stringify(project),
//   });

//   return (
//     <>
//       <button onClick={() => setOpen(true)}>+ New Project</button>

//       <CreateProjectModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onCreate={handleCreate}
//       />
//     </>
//   );
// }

import { useState, useEffect } from "react";
import CreateProjectModal from "../components/CreateProjectModal";
import { fetchProjects } from "../services/api";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchProjects();
      setProjects(data);
    }
    loadProjects();
  }, []);
  

  const handleCreate = async (project) => {
    const API_URL = "http://127.0.0.1:8000";

    try {
      const response = await fetch(`${API_URL}/api/projects/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: JSON.stringify(project),
      });
      
        const data = await response.json();

      if (!response.ok) {
      console.error("Backend error response:", data);
      throw new Error("Failed to create project");
    }


      console.log("Project created:", data);

      // update table after create
      setProjects((prev) => [...prev, data]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>+ New Project</button>

      <CreateProjectModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
      />

      <div className="projects-container">
        {projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          <table className="projects-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{p.status}</td>
                  <td>{p.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}


