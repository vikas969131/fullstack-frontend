// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SubscriberPage = () => {
//   const [subscribers, setSubscribers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/subscribers")
//       .then((res) => setSubscribers(res.data))
//       .catch((err) => console.error("Error fetching subscribers:", err));
//   }, []);

//   return (
//     <div>
//       <h2>📧 Subscribed Emails</h2>

//       <ul style={listStyle}>
//         {subscribers.map((s) => (
//           <li key={s.id}>{s.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const listStyle = {
//   padding: "1rem",
//   background: "#f9f9f9",
//   borderRadius: "8px",
//   maxWidth: "500px",
// };

// export default SubscriberPage;















import React, { useEffect, useState } from "react";
import axios from "axios";

const SubscriberPage = () => {
  const [subscribers, setSubscribers] = useState([]);

  /* ───────── Fetch once on mount ───────── */
  useEffect(() => {
    axios
      .get("https://fullstack-backend-lw0y.onrender.com/api/subscribers")
      .then((res) => setSubscribers(res.data))
      .catch((err) => console.error("Error fetching subscribers:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📧 Newsletter Subscribers</h2>

      {/* ───────── Subscriber Table ───────── */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded shadow">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="py-2 px-4">Email</th>
              {/* Uncomment next line if your entity has a timestamp */}
              {/* <th className="py-2 px-4">Subscribed At</th> */}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {subscribers.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="py-2 px-4">{s.email}</td>
                {/* If you have a field e.g. s.subscribedAt */}
                {/* <td className="py-2 px-4">{new Date(s.subscribedAt).toLocaleDateString()}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriberPage;

