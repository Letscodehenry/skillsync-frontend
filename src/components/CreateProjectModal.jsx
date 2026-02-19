import { useState } from "react";
import "../styles/CreateProjectModal.css";

export default function CreateProjectModal({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        title: form.title,
        description: form.description,
        budget: parseFloat(form.budget),
        deadline: form.deadline, // must be YYYY-MM-DD
        status: "open",
      };

      console.log("Submitting project:", payload);

      await onCreate(payload);

      // reset form
      setForm({
        title: "",
        description: "",
        budget: "",
        deadline: "",
      });

      onClose();
    } catch (err) {
      setError("Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Project</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Project title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Project description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <input
            name="budget"
            type="number"
            placeholder="Budget"
            value={form.budget}
            onChange={handleChange}
            required
          />

          <input
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            required
          />

          <div style={{ marginTop: 10 }}>
            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create"}
            </button>

            <button type="button" onClick={onClose} style={{ marginLeft: 10 }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
