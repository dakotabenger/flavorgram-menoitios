import styled from "styled-components";
import '../NavBar/NavBar.css'
import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect,useHistory } from "react-router-dom";
import * as searchActions from '../../store/search'


const StyledInput = styled.input`
  height:35px;
  width: 500px;
  font-size: 30px;
  text-align: center;

`
const Search = () => {
  const [search, setSearch] = useState('')
  const searchResults = useSelector((state) => state.search.results);
  const dispatch = useDispatch()
  const history = useHistory()
  const onSearch = (e) => {
    e.preventDefault();

    return dispatch(searchActions.search(search))
  }

  if(searchResults) {history.push("/search-results")}

    return (
    <div>
      <form onSubmit={onSearch}>
      <StyledInput
        type="text"
        className="searchbar fas fa-search"
        placeholder="Search Recipes..."
        onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
    )
}

export default Search;
