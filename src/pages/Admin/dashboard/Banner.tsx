import React, { useState } from "react";

const Banner = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      image: "banner1.jpg",
      text: "Banner 1",
      description: "Description for Banner 1",
    },
    {
      id: 2,
      image: "banner2.jpg",
      text: "Banner 2",
      description: "Description for Banner 2",
    },
  ]);

  const handleDeleteBanner = (id) => {
    const updatedBanners = banners.filter((banner) => banner.id !== id);
    setBanners(updatedBanners);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">Banner Management</h1>
      <hr className="mb-8 border-t-2 border-gray-400" />
      <div className="bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label
              htmlFor="bannerImage"
              className="block text-sm font-medium text-gray-700"
            >
              Banner Image
            </label>
            <input
              type="file"
              id="bannerImage"
              className="mt-1 p-2 border-2 border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bannerText"
              className="block text-sm font-medium text-gray-700"
            >
              Banner Text
            </label>
            <input
              type="text"
              id="bannerText"
              className="mt-1 p-2 border-2 border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bannerDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Banner Description
            </label>
            <textarea
              id="bannerDescription"
              className="mt-1 p-2 border-2 border-gray-300 rounded-md w-full h-20 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Upload Banner
          </button>
        </form>
      </div>
      <hr className="mb-8 border-t-2 border-gray-400" />
      <h1 className="text-2xl font-bold mb-4">Banner List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={banner.image}
              alt={banner.text}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{banner.text}</h3>
            <p className="text-sm text-gray-600 mb-4">{banner.description}</p>
            <button
              onClick={() => handleDeleteBanner(banner.id)}
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
