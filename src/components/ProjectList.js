import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img src={p.imageUrl} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h3>
              <p className="text-gray-600 text-sm">{p.description}</p>
              <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-not-allowed" disabled>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
