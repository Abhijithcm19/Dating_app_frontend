import React from "react";

const Support = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Message sent!");
  };

  return (
    <div>
      <hr />
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="bg-blue-500 w-[40%] text-white p-8 rounded-3xl shadow-md">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Hi. How can we help?
          </h1>
          <div className="text-center mb-4">
            <p>Contact us for any assistance</p>
          </div>
          <form onSubmit={handleSubmit} className="text-center">
            <div className="mb-4 text-left">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4 text-left">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4 text-left">
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Your phone number"
              />
            </div>
            <div className="mb-4 text-left">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
