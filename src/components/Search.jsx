import { useState } from "react";
import { StyledSearch, StyledInput } from "./Search.styled";

const Search = ({ results, onSearch }) => {
  const [value, setValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(value);
  };

  const handleChange = (e) => {
    const searchString = e.target.value;
    if (searchString.length === 0) {
      onSearch(searchString);
    }
    setValue(e.target.value);
  };

  return (
    <StyledSearch onSubmit={handleSubmit}>
      <StyledInput
        type="search"
        placeholder="Search for a smartphone..."
        onChange={handleChange}
      />
      <p>{results} results</p>
    </StyledSearch>
  );
};

export default Search;
