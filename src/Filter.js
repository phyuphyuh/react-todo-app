import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="grid grid-cols-1 mb-4">
      <select onChange={(e) => onFilterChange(e.target.value)} className="col-start-1 row-start-1 w-full bg-gray-100 py-1.5 pr-8 pl-3 text-base rounded-lg shadow-md appearance-none sm:text-sm/6">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default Filter;
