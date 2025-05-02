import React, { useState } from "react";

function Search({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const onHandleChange = (event) => {
    setInput(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    if (input) {
      setSearchTerm(input); 
    }
  };

  return (
    <div className="Search mb-6">
      <form
        onSubmit={onSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-4 rounded-xl shadow-md"
      >
        <input
          type="text"
          value={input}
          onChange={onHandleChange}
          placeholder="Enter the dish..."
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
  
}

export default Search;
