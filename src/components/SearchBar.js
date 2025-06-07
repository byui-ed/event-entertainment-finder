import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Call the parent component's function
  };

  return (
    <input
      type="text"
      placeholder="Search events..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;