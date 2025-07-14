import React, { useEffect, useState } from "react";
import axios from "axios";

function ClientList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/clients")
      .then((res) => {
        setClients(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching clients:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading clients…</p>;

  // return (
  //   // <section>
  //   //   <h2>Our Clients</h2>
  //   //   <div className="client-grid">

  //   //     {clients.map((c) => (
  //   //       <div
  //   //         key={c.id}
  //   //         style={{
  //   //           border: "1px solid #ddd",
  //   //           padding: "1rem",
  //   //           borderRadius: "8px",
  //   //           textAlign: "center",
  //   //           width: "150px",
  //   //         }}
  //   //       >
  //   //         <img
  //   //           src={c.logoUrl}
  //   //           alt={c.name}
  //   //           style={{ width: "100px", height: "auto", marginBottom: "0.5rem" }}
  //   //         />
  //   //         <p>{c.name}</p>
  //   //       </div>
  //   //     ))}
  //   //   </div>
  //   // </section>
  // );
}

export default ClientList;
