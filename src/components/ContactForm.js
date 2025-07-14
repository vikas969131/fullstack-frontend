// import React, { useState } from "react";
// import axios from "axios";

// const ContactForm = () => {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     mobileNumber: "",
//     city: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8080/api/contact-forms", form)
//       .then(() => {
//         alert("Your message has been submitted!");
//         setForm({ fullName: "", email: "", mobileNumber: "", city: "" });
//       })
//       .catch((err) => {
//         console.error("Submit error:", err);
//         alert("Submission failed. Try again.");
//       });
//   };

//   return (
//     <section className="bg-white py-16 px-6" id="contact">
//       <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-10">
//         Contact Us
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md"
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={form.fullName}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
//           <input
//             type="tel"
//             name="mobileNumber"
//             value={form.mobileNumber}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-1">City</label>
//           <input
//             type="text"
//             name="city"
//             value={form.city}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;
































import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",            // rename fullName → name
    email: "",
    mobileNumber: "",
    city: "",
    message: "",         // NEW field
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://fullstack-backend-lw0y.onrender.com/api/contact-forms", form)
      .then(() => {
        alert("Submitted!");
        setForm({
          name: "",
          email: "",
          mobileNumber: "",
          city: "",
          message: "",
        });
      })
      .catch(() => alert("Submission failed"));
  };

  return (
    <section className="bg-white py-16 px-6" id="contact">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-100 p-8 shadow rounded-xl"
      >
        <Input label="Full Name"  name="name"          value={form.name}          onChange={handleChange} />
        <Input label="Email"      name="email"         type="email"              value={form.email}         onChange={handleChange} />
        <Input label="Mobile No." name="mobileNumber"  value={form.mobileNumber} onChange={handleChange} />
        <Input label="City"       name="city"          value={form.city}         onChange={handleChange} />

        {/* NEW textarea */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-blue-500"
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

/* Small reusable input component */
const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border rounded focus:outline-blue-500"
    />
  </div>
);

export default ContactForm;
