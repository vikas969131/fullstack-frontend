// import React, { useEffect, useState } from "react";
// import axios from "axios";


// function ProjectPage() {
//   const [projects, setProjects] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     image: "",
//   });

//   // ✅ These must be inside the component function:
//   const [editingId, setEditingId] = useState(null);
//   const [editData, setEditData] = useState({
//     name: "",
//     description: "",
//     image: "",
//   });

//   // ... rest of the code

//   const fetchProjects = () => {
//     axios.get("http://localhost:8080/api/projects")
//       .then((res) => setProjects(res.data))
//       .catch((err) => console.error("Error fetching projects:", err));
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const handleDelete = (id) => {
//   if (!window.confirm("Delete this project?")) return;
//   axios.delete(`http://localhost:8080/api/projects/${id}`)
//     .then(() => fetchProjects())
//     .catch(err => console.error("Delete error:", err));
// };


// const startEdit = (proj) => {
//   setEditingId(proj.id);
//   setEditData({
//     name: proj.name,
//     description: proj.description,
//     image: proj.image,
//   });
// };

// const saveEdit = (id) => {
//   axios.put(`http://localhost:8080/api/projects/${id}`, editData)
//     .then(() => {
//       setEditingId(null);
//       fetchProjects();
//     })
//     .catch(err => console.error("Update error:", err));
// };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/api/projects", formData)
//       .then(() => {
//         setFormData({ name: "", description: "", image: "" });
//         fetchProjects();
//       })
//       .catch((err) => console.error("Error adding project:", err));
//   };

//   return (
//     <div>
//       <h2>📁 Manage Projects</h2>

//       {/* Form to Add Project */}
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input
//           type="text"
//           placeholder="Project Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Project Description"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Project Image URL"
//           value={formData.image}
//           onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//           required
//         />
//         <button type="submit">Add Project</button>
//       </form>

//       {/* Project Table */}
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//   {projects.map((proj) => (
//     <tr key={proj.id}>
//       {/* ✅ IMAGE */}
//       <td>
//         <img src={proj.image} alt={proj.name} width="80" />
//       </td>

//       {/* ✅ NAME (text or input) */}
//       <td>
//         {editingId === proj.id ? (
//           <input
//             value={editData.name}
//             onChange={(e) =>
//               setEditData({ ...editData, name: e.target.value })
//             }
//           />
//         ) : (
//           proj.name
//         )}
//       </td>

//       {/* ✅ DESCRIPTION (text or input) */}
//       <td>
//         {editingId === proj.id ? (
//           <input
//             value={editData.description}
//             onChange={(e) =>
//               setEditData({ ...editData, description: e.target.value })
//             }
//           />
//         ) : (
//           proj.description
//         )}
//       </td>

//       {/* ✅ ACTION BUTTONS */}
//       <td>
//         {editingId === proj.id ? (
//           <>
//             <button onClick={() => saveEdit(proj.id)}>💾 Save</button>
//             <button onClick={() => setEditingId(null)}>✖ Cancel</button>
//           </>
//         ) : (
//           <>
//             <button onClick={() => startEdit(proj)}>✏️ Edit</button>
//             <button onClick={() => handleDelete(proj.id)}>🗑️ Delete</button>
//           </>
//         )}
//       </td>
//     </tr>
//   ))}
// </tbody>

//       </table>
//     </div>
//   );
// };

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   maxWidth: "400px",
//   gap: "1rem",
//   marginBottom: "2rem"
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse"
// };

// export default ProjectPage;






























import React, { useEffect, useState } from "react";
import axios from "axios";

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const fetchProjects = () => {
    axios
      .get("https://fullstack-backend-lw0y.onrender.com/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this project?")) return;
    axios
      .delete(`https://fullstack-backend-lw0y.onrender.com/api/projects/${id}`)
      .then(() => fetchProjects())
      .catch((err) => console.error("Delete error:", err));
  };

  const startEdit = (proj) => {
    setEditingId(proj.id);
    setEditData({
      name: proj.name,
      description: proj.description,
      image: proj.image,
    });
  };

  const saveEdit = (id) => {
    axios
      .put(`https://fullstack-backend-lw0y.onrender.com/api/projects/${id}`, editData)
      .then(() => {
        setEditingId(null);
        fetchProjects();
      })
      .catch((err) => console.error("Update error:", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fullstack-backend-lw0y.onrender.com/api/projects", formData)
      .then(() => {
        setFormData({ name: "", description: "", image: "" });
        fetchProjects();
      })
      .catch((err) => console.error("Error adding project:", err));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📁 Manage Projects</h2>

      {/* Form to Add Project */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded p-6 mb-8 max-w-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Project Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Project Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Project Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          ➕ Add Project
        </button>
      </form>

      {/* Project Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded shadow">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {projects.map((proj) => (
              <tr key={proj.id} className="hover:bg-gray-50">
                <td className="py-2 px-4">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-20 h-auto rounded"
                  />
                </td>
                <td className="py-2 px-4">
                  {editingId === proj.id ? (
                    <input
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    proj.name
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingId === proj.id ? (
                    <input
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          description: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    proj.description
                  )}
                </td>
                <td className="py-2 px-4 space-x-2">
                  {editingId === proj.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(proj.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                      >
                        💾 Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                      >
                        ✖ Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(proj)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        🗑️ Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectPage;
