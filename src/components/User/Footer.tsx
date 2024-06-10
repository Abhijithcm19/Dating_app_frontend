import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const quotes = [
    {
      text: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle",
    },
    {
      text: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn",
    },
    {
      text: "Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.",
      author: "John Lennon",
    },
  ];

  return (
    <div>
      <hr className="my-0.5 min-w-full border-gray-500" />
      <footer className="px-6 md:px-10 bg-gray-900 text-white py-6">
        <div className="container mx-auto">
          {/* Quote Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg p-6 shadow-2xl hover:shadow-xl transition duration-300"
              >
                <p className="text-lg">{quote.text}</p>
                <p className="text-sm text-right mt-4 text-yellow-600">
                  - {quote.author}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-t border-gray-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Social Media Links */}
            <div className="md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 rounded-r hover:bg-red-600 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="text-gray-400">
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  New York, NY
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  info@example.com
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  +1 234 567 890
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
            <p className="text-gray-400">
              &copy; 2024 LoveLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
