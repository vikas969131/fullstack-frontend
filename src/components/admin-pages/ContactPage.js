// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ContactPage = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/contacts-forms")
//       .then((res) => setContacts(res.data))
//       .catch((err) => console.error("Error fetching contacts:", err));
//   }, []);

//   return (
//     <div>
//       <h2>📬 Contact Form Submissions</h2>

//       <table className="min-w-full table-auto border border-gray-200 shadow rounded overflow-hidden">
//   <thead className="bg-blue-600 text-white text-left">
//     <tr>
//       <th className="py-2 px-4">Full Name</th>
//       <th className="py-2 px-4">Email</th>
//       <th className="py-2 px-4">Mobile</th>
//       <th className="py-2 px-4">City</th>
//     </tr>
//   </thead>
//   <tbody className="bg-white divide-y divide-gray-100">
//     {contacts.map((c) => (
//       <tr key={c.id} className="hover:bg-gray-50">
//         <td className="py-2 px-4">{c.fullName}</td>
//         <td className="py-2 px-4">{c.email}</td>
//         <td className="py-2 px-4">{c.mobileNumber}</td>
//         <td className="py-2 px-4">{c.city}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//     </div>
//   );
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
// };

// export default ContactPage;




















import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);

  /* ───────── Fetch once on mount ───────── */
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/contact-forms") 
      .then((res) =>{ console.log("CONTACT JSON:", res.data);  setContacts(res.data)})
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        📬 Contact Form Submissions
      </h2>

      {/* ───────── Tailwind table ───────── */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 shadow rounded overflow-hidden">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="py-2 px-4">Full Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Mobile</th>
              <th className="py-2 px-4">City</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {contacts.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="py-2 px-4">{c.name}</td>
                <td className="py-2 px-4">{c.email}</td>
                <td className="py-2 px-4">{c.mobile}</td>
                <td className="py-2 px-4">{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactPage;
