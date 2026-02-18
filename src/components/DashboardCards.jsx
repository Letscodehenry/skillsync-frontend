import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";
import "../styles/DashboardCards.css";

export default function DashboardCards() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const projects = await fetchProjects();

        const total = projects.length;
        const active = projects.filter(p => p.status === "active").length;
        const completed = projects.filter(p => p.status === "completed").length;

        setStats([
          { title: "Total Projects", value: total },
          { title: "Active Projects", value: active },
          { title: "Completed Projects", value: completed },
        ]);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  if (!stats) return <p>Loading dashboard...</p>;

  return (
    <div className="cards-grid">
      {stats.map((stat, index) => (
        <div className="card" key={index}>
          <h4>{stat.title}</h4>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
