import styled from "styled-components";
import "../NavBar/NavBar.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getSearchResults, removeSearchResults } from "../../store/search";

const StyledInput = styled.input`
  height: 35px;
  width: 500px;
  font-size: 30px;
  text-align: center;
`;
const Search = () => {
  const [term, setTerm] = useState("");
  // const searchResults = useSelector((state) => state.search.results);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const setSearchResults = async () => {
      if (term !== "") {
        await dispatch(getSearchResults(term));
      } else {
        dispatch(removeSearchResults());
      }
    };

    setSearchResults();
  }, [term]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  // const onSearch = (e) => {
  //   e.preventDefault();

  //   return dispatch(searchActions.search(term));
  // };

  // if (searchResults) {
  //   history.push("/search-results");
  // }
  // onSubmit = { onSearch };
  return (
    <div>
      <form>
        <StyledInput
          type="text"
          value={term}
          className="searchbar fas fa-search"
          placeholder="Search Recipes..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
