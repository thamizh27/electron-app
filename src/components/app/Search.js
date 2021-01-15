import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [value, setValue] = useState("");

  const handleChange = (q) => {
    setValue(q);
    getQuery(q);
  };

  return (
    <div className="search">
      <form>
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search characters..."
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
