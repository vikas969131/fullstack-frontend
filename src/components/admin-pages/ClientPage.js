// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ClientPage = () => {
//   const [clients, setClients] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     designation: "",
//     image: "",
//   });

//   const fetchClients = () => {
//     axios.get("http://localhost:8080/api/clients")
//       .then((res) => setClients(res.data))
//       .catch((err) => console.error("Error fetching clients:", err));
//   };

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/api/clients", formData)
//       .then(() => {
//         setFormData({ name: "", description: "", designation: "", image: "" });
//         fetchClients();
//       })
//       .catch((err) => console.error("Error adding client:", err));
//   };

//   return (
//     <div>
//       <h2>👥 Manage Clients</h2>

//       {/* Add Client Form */}
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input type="text" placeholder="Name" value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
//         <input type="text" placeholder="Description" value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
//         <input type="text" placeholder="Designation" value={formData.designation}
//           onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />
//         <input type="text" placeholder="Image URL" value={formData.image}
//           onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
//         <button type="submit">Add Client</button>
//       </form>

//       {/* View Clients */}
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Designation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {clients.map((client) => (
//             <tr key={client.id}>
//               <td><img src={client.image} alt={client.name} width="80" /></td>
//               <td>{client.name}</td>
//               <td>{client.description}</td>
//               <td>{client.designation}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   maxWidth: "400px",
//   gap: "1rem",
//   marginBottom: "2rem",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
// };

// export default ClientPage;




















import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientPage = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    designation: "",
    image: "",
  });

  /* ───────── Fetch helpers ───────── */
  const fetchClients = () => {
    axios
      .get("http://localhost:8080/api/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.error("Error fetching clients:", err));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  /* ───────── Add new client ───────── */
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/clients", formData)
      .then(() => {
        setFormData({ name: "", description: "", designation: "", image: "" });
        fetchClients();
      })
      .catch((err) => console.error("Error adding client:", err));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">👥 Manage Clients</h2>

      {/* ───────── Add Client Form ───────── */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded p-6 mb-8 max-w-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Designation"
          value={formData.designation}
          onChange={(e) =>
            setFormData({ ...formData, designation: e.target.value })
          }
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          ➕ Add Client
        </button>
      </form>

      {/* ───────── View Clients Table ───────── */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded shadow">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Designation</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {clients.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="py-2 px-4">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                </td>
                <td className="py-2 px-4">{c.name}</td>
                <td className="py-2 px-4">{c.description}</td>
                <td className="py-2 px-4">{c.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientPage;
