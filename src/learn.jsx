import React, { useState } from "react";

const Learn = () => {
  const [values, setValues] = useState({
    name: "",
    additionalInfo: [],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedValues = { ...values };
    if (name === "name") {
      updatedValues[name] = value;
    } else {
      updatedValues.additionalInfo[index] = value;
    }
    setValues(updatedValues);
  };

  const handleAddField = () => {
    setValues({
      ...values,
      additionalInfo: [...values.additionalInfo, ""], // Add new input field
    });
  };

  const handleRemoveField = (index) => {
    const updatedInfo = values.additionalInfo.filter((_, i) => i !== index);
    setValues({
      ...values,
      additionalInfo: updatedInfo, // Remove input field at specified index
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Info</h2>

        {/* Student name field */}
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student name"
          />
        </div>

        {/* Additional Student Info */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          Student Additional Info
        </h2>

        {/* Button to add new input field */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleAddField}
            className="p-4 rounded-full bg-green-500 text-white"
          >
            +
          </button>
        </div>

        {/* Dynamically generated input fields */}
        {values.additionalInfo.map((info, index) => (
          <div key={index} className="flex items-center space-x-2 my-4">
            <input
              type="text"
              name="additionalInfo"
              value={info}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter additional info ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              className="p-2 bg-red-500 text-white rounded-full"
            >
              X
            </button>
          </div>
        ))}
      </form>


      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">JS</h2>

     
      </form>


    </div>
  );
};

export default Learn;
