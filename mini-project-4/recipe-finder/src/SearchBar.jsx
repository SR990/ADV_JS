import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-4 bg-white shadow-md rounded-lg p-4"
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a recipe..."
        className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Search
      </button>
    </form>
  );
  
};

export default SearchBar;
