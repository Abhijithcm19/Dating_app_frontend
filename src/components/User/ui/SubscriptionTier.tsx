import React from "react";

const SubscriptionTier = ({ tier, price, duration, features }) => {
  return (
    <div className="bg-neutral-900 p-8 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">{tier}</h2>
      <ul className="text-lg mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="h-6 w-6 fill-current mr-2 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 110-16 8 8 0 010 16zm-3.293-7.707l5-5a1 1 0 011.414 1.414l-3.5 3.5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414l1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Price: {price}</p>
        <p className="text-lg">Duration: {duration}</p>
      </div>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
        Subscribe Now
      </button>
    </div>
  );
};

export default SubscriptionTier;
