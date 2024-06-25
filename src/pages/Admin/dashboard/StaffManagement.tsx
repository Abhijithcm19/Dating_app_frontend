import React, { useState } from "react";

const StaffManagement = () => {
  // Mock data for demonstration
  const [staffList, setStaffList] = useState([
    { id: 1, email: "john@example.com", password: "password1", blocked: false },
    { id: 2, email: "jane@example.com", password: "password2", blocked: false },
    // Add more staff members as needed
  ]);

  const handleBlockStaff = (id) => {
    const updatedStaffList = staffList.map((staff) =>
      staff.id === id ? { ...staff, blocked: true } : staff
    );
    setStaffList(updatedStaffList);
  };

  const handleUnblockStaff = (id) => {
    const updatedStaffList = staffList.map((staff) =>
      staff.id === id ? { ...staff, blocked: false } : staff
    );
    setStaffList(updatedStaffList);
  };

  const handleDeleteStaff = (id) => {
    const updatedStaffList = staffList.filter((staff) => staff.id !== id);
    setStaffList(updatedStaffList);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Staff Management
      </h1>
      <hr className="my-8 border-t border-gray-400" />
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center justify-center mb-8">
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-600 p-2 mr-2 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-600 p-2 mr-2 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Add Staff
          </button>
        </div>
      </form>
      <hr className="my-8 border-t border-gray-400" />
      <h2 className="text-xl font-bold mb-4">Staff List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-2 px-4">Email</th>
              <th className="text-left py-2 px-4">Status</th>
              <th className="text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-100">
                <td className="py-2 px-4">{staff.email}</td>
                <td className="py-2 px-4">
                  {staff.blocked ? (
                    <span className="bg-red-500 text-white py-1 px-2 rounded-lg">
                      Blocked
                    </span>
                  ) : (
                    <span className="bg-green-500 text-white py-1 px-2 rounded-lg">
                      Active
                    </span>
                  )}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDeleteStaff(staff.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                  {staff.blocked ? (
                    <button
                      onClick={() => handleUnblockStaff(staff.id)}
                      className="bg-green-500 text-white py-1 px-2 ml-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBlockStaff(staff.id)}
                      className="bg-yellow-500 text-white py-1 px-2 ml-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
                    >
                      Block
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffManagement;
