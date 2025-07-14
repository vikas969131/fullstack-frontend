import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Welcome to Flipr Portfolio</h1>
        <p className="text-lg sm:text-xl mb-8">
          Explore our latest projects, meet our happy clients, and connect with us for your next big idea.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
