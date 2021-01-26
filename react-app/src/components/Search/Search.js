import styled from "styled-components";
import '../NavBar/NavBar.css'
import React from 'react';

const StyledInput = styled.input`
  height:35px;
  width: 500px;
  font-size: 30px;
  text-align: center;

`
const Search = () => {
    return <StyledInput type="text" className="searchbar fas fa-search" placeholder="Search Recipes..."></StyledInput>
}

export default Search;
