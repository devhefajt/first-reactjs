import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: [], // Skills as an array,
    gender: "",
    city: "",
    image: null,
  });

  const skillOptions = ["javascript", "react", "node", "css", "do", "c", "c++"]; // Static list in component

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, name]
          : prevData.skills.filter((skill) => skill !== name),
      }));
    } else if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          User Registration Form
        </h2>

        {/* Name */}
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
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
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
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Skills (Checkboxes) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Skills</label>
          <div className="flex gap-4">
            {skillOptions.map((skill) => (
              <label key={skill} className="flex items-center capitalize">
                <input
                  type="checkbox"
                  name={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        {/* Gender (Radio Buttons) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        {/* City (Dropdown) */}
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 font-medium mb-2"
          >
            City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your city</option>
            <option value="newyork">New York</option>
            <option value="losangeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Upload Profile Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
