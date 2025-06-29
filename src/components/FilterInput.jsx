import React from 'react';

function FilterInput({ filter, setFilter, onFilterChange }) {
  const handleChange = (e) => {
    setFilter(e.target.value);
    onFilterChange();
  };

  return (
    <input
      type="text"
      placeholder="Filter by car name:"
      value={filter}
      onChange={handleChange}
      className="p-3 mb-6 w-full max-w-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      aria-label="Filter by car name"
    />
  );
}

export default FilterInput;
