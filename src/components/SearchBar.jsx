// components/SearchBar.jsx
import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Search Notes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
