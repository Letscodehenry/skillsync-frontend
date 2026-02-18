import { useState } from "react";
import "../styles/CreateProjectModal.css";

export default function CreateProjectModal({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "Active",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(form);
    setForm({ name: "", description: "", status: "Active" });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Create Project</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Project name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="create-btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
