import React, { useState } from "react";
import axios from "axios";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/subscribers", { email })
      .then(() => {
        alert("Thanks for subscribing!");
        setEmail("");
      })
      .catch((err) => {
        console.error("Subscription error:", err);
        alert("Subscription failed. Try again.");
      });
  };

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Enter your email address to get updates about new projects and client success stories.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-auto px-4 py-3 rounded-md border border-gray-300 focus:outline-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
