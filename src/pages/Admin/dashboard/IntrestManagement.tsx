import React, { useState } from "react";

const InterestManagement = () => {
  const [complaints, setComplaints] = useState([
    { id: 1, subject: "Issue with billing", status: "pending" },
    { id: 2, subject: "Service not working", status: "pending" },
    { id: 3, subject: "Login problem", status: "pending" },
    { id: 4, subject: "Account hacked", status: "pending" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.id === id ? { ...complaint, status: newStatus } : complaint
    );
    setComplaints(updatedComplaints);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Complaint Management
      </h1>
      <div className="grid gap-6">
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {complaint.subject}
              </h3>
              <p className="text-sm text-gray-600">
                Status: {complaint.status}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                onClick={() => handleStatusChange(complaint.id, "working")}
              >
                Mark as Working
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                onClick={() => handleStatusChange(complaint.id, "resolved")}
              >
                Mark as Resolved
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                onClick={() => handleStatusChange(complaint.id, "rejected")}
              >
                Mark as Rejected
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestManagement;
