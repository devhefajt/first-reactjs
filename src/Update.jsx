import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams(); // Get user ID from URL
  // console.log(id);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  // Fetch existing user data when component mounts
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      setValues({
        name: res.data.name,
        email: res.data.email,
      });
    });
  }, [id]);


 // Handle form submission for updating user data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, values)
      .then(() => {
        console.log('User updated successfully');
        navigate('/'); 
      })
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
 }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">User Form</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
