import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)} className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
  );
};

export default Filter;
