import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      // .then((res) => {
      //   console.log('Response Data:', res.data);
      .then((res) => {
        setData(res.data);
      })
  }, []);


  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete this user");
    if (confirm) {
      axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        setData(data.filter((user) => user.id !== id)); // Remove user from state after deletion
      })
    }
    
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">List of Users</h1>
      <Link to="/create">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create
          </button>
        </Link>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">ID</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3" className="px-4 py-2 text-center">
                No users available
              </td>
            </tr>
          ) : (
            data.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border border-gray-300">{user.id}</td>
                <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                <td className="px-4 py-2 border border-gray-300">{user.email}</td>
                <td className="px-4 py-2 border border-gray-300 space-x-2">
                  <Link to={`/update/${user.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={e => handleDelete(user.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
