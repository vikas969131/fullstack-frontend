import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.error("Client fetch error:", err));
  }, []);

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
              src={c.image}
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
};

export default ClientSection;
