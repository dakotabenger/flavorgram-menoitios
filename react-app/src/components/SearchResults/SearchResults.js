import React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";

const SearchResults = () => {
    const results = useSelector((state) => state.search.results);

    return (
        <div>
            <div>
                <h1>{results.recipes}</h1>
            </div>
            <div>
                <h2>Hit</h2>
            </div>
        </div>
    )
}

export default SearchResults
