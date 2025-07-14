// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 px-6">
//       <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {/* Brand */}
//         <div>
//           <h3 className="text-xl font-bold text-white mb-3">Flipr Portfolio</h3>
//           <p className="text-sm">
//             Building modern full‑stack solutions that delight clients worldwide.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-semibold text-white mb-2">Quick Links</h4>
//           <ul className="space-y-1 text-sm">
//             <li><a href="#projects" className="hover:text-white">Projects</a></li>
//             <li><a href="#clients"  className="hover:text-white">Clients</a></li>
//             <li><a href="#contact"  className="hover:text-white">Contact</a></li>
//             <li><a href="#newsletter" className="hover:text-white">Subscribe</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-semibold text-white mb-2">Contact Us</h4>
//           <p className="text-sm">flipr@example.com</p>
//           <p className="text-sm">+91 12345 67890</p>
//           <p className="text-sm">Bengaluru, India</p>
//         </div>

//         {/* Social */}
//         <div>
//           <h4 className="font-semibold text-white mb-2">Follow Us</h4>
//           <div className="flex gap-4 text-xl">
//             <a href="#" className="hover:text-white">🌐</a>
//             <a href="#" className="hover:text-white">🐦</a>
//             <a href="#" className="hover:text-white">📸</a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
//         © {new Date().getFullYear()} Flipr Portfolio. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Flipr Portfolio</h3>
          <p className="text-sm">
            Building modern full‑stack solutions that delight clients worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#projects"    className="hover:text-white">Projects</a></li>
            <li><a href="#clients"     className="hover:text-white">Clients</a></li>
            <li><a href="#contact"     className="hover:text-white">Contact</a></li>
            <li><a href="#newsletter"  className="hover:text-white">Subscribe</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-2">Contact Us</h4>
          <p className="text-sm">flipr@example.com</p>
          <p className="text-sm">+91 12345 67890</p>
          <p className="text-sm">Bengaluru, India</p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            {/* Replace with your real social links */}
            <a href="https://flipr-portfolio.com"      target="_blank" rel="noopener noreferrer" className="hover:text-white">🌐</a>
            <a href="https://twitter.com/flipr"        target="_blank" rel="noopener noreferrer" className="hover:text-white">🐦</a>
            <a href="https://instagram.com/flipr"      target="_blank" rel="noopener noreferrer" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Flipr Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
