import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", email: "user1@example.com", banned: false },
    { id: 2, username: "user2", email: "user2@example.com", banned: false },
  ]);

  const handleBanUser = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, banned: true } : user
    );
    setUsers(updatedUsers);
  };

  const handleUnbanUser = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, banned: false } : user
    );
    setUsers(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search form submission logic here if needed
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        User Management
      </h1>
      <hr className="my-4 border-t border-gray-400" />
      <form
        onSubmit={handleSubmit}
        className="mb-8 flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search user..."
          className="border p-2 rounded-l focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
      <hr className="my-4 border-t border-gray-400" />
      {/* User list */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={user.banned ? "bg-red-100" : ""}>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {user.banned ? (
                    <span className="bg-red-500 text-white py-1 px-2 rounded-lg">
                      Banned
                    </span>
                  ) : (
                    <span className="bg-green-500 text-white py-1 px-2 rounded-lg">
                      Active
                    </span>
                  )}
                </td>
                <td className="px-4 py-2">
                  {!user.banned ? (
                    <button
                      onClick={() => handleBanUser(user.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                    >
                      Ban
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnbanUser(user.id)}
                      className="bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                    >
                      Unban
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

export default UserManagement;
