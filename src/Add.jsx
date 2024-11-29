import React, { useState } from "react";

const Add = () => {
  const [inputFields, setInputFields] = useState([{ name: "" }]);

  const handleAddField = () => {
    setInputFields([...inputFields, { name: "" }]);
  };

  const handleDeleteField = (index) => {
    const updatedFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedFields);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Dynamic Fields</h2>
        <div className="mt-4 flex justify-between">
          <button
            type="button"
            onClick={handleAddField}
            className="px-4 py-2 mb-5 bg-blue-500 text-white rounded"
          >
            +
          </button>
        </div>
        <div className="space-y-4">
          {inputFields.map((inputField, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={inputField.name}
                className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => handleDeleteField(index)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Add;
