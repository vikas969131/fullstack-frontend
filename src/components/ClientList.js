// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ClientList() {
//   const [clients, setClients] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://fullstack-backend-lw0y.onrender.com/api/clients")
//       .then((res) => {
//         setClients(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching clients:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading clients…</p>;

//   // return (
//   //   // <section>
//   //   //   <h2>Our Clients</h2>
//   //   //   <div className="client-grid">

//   //   //     {clients.map((c) => (
//   //   //       <div
//   //   //         key={c.id}
//   //   //         style={{
//   //   //           border: "1px solid #ddd",
//   //   //           padding: "1rem",
//   //   //           borderRadius: "8px",
//   //   //           textAlign: "center",
//   //   //           width: "150px",
//   //   //         }}
//   //   //       >
//   //   //         <img
//   //   //           src={c.logoUrl}
//   //   //           alt={c.name}
//   //   //           style={{ width: "100px", height: "auto", marginBottom: "0.5rem" }}
//   //   //         />
//   //   //         <p>{c.name}</p>
//   //   //       </div>
//   //   //     ))}
//   //   //   </div>
//   //   // </section>
//   // );
// }

// export default ClientList;














import React, { useEffect, useState } from "react";
import axios from "axios";

const fallbackAvatar = "/portfolio.png"; // in public/ folder

function ClientList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fullstack-backend-lw0y.onrender.com/api/clients")
      .then((res) => {
        setClients(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching clients:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-6">Loading clients…</p>;

  return (
    <section className="bg-gray-50 py-16 px-6" id="clients">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12">
        Happy Clients
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {clients.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={c.image || fallbackAvatar}
              alt={c.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-100"
            />
            <p className="text-gray-600 italic mb-4">“{c.description}”</p>
            <h4 className="text-lg font-semibold">{c.name}</h4>
            <span className="text-sm text-blue-600">{c.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientList;
