import React, { useState } from "react";

const Subscription = () => {
  const [plans, setPlans] = useState([
    {
      name: "Basic Plan",
      description: "Basic features for new users",
      price: "$9.99",
      duration: "1 month",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Premium Plan",
      description: "Advanced features for power users",
      price: "$19.99",
      duration: "3 months",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Gold Plan",
      description: "Exclusive features for VIP users",
      price: "$29.99",
      duration: "6 months",
      image: "https://via.placeholder.com/300",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlans([...plans, { ...formData }]);
    setFormData({
      name: "",
      description: "",
      price: "",
      duration: "",
      image: "",
    });
  };

  const handleDelete = (index) => {
    const updatedPlans = [...plans];
    updatedPlans.splice(index, 1);
    setPlans(updatedPlans);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Manage Subscription Plans
      </h1>
      <hr className="my-4 border-t border-gray-400" />
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-2">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="duration" className="block mb-2">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="image" className="block mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
              accept="image/*"
              required
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Add Plan
            </button>
          </div>
        </div>
      </form>
      <hr className="my-4 border-t border-gray-400" />
      <h2 className="text-2xl font-bold mb-4">Subscription Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={plan.image}
              alt={plan.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-2">{plan.description}</p>
              <p className="text-gray-600 mb-2">Price: {plan.price}</p>
              <p className="text-gray-600 mb-2">Duration: {plan.duration}</p>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
