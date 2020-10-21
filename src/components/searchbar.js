import React from "react";

const SearchBar = ({ setQuery }) => {
  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        style={{ width: "100%", padding: "1em", border: "2px solid lightgrey", boxSizing: 'border-box' }}
        placeholder="search"
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchBar;
