import React, { useState } from "react";
import PropTypes from "prop-types";
import toast from 'react-hot-toast';
import {SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} from "./SearchBar.styled"

function SearchBar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.trim() === "") {
            toast.error("The search field is empty!")
            return;
        }

        onSubmit(searchQuery);
        resetState();
    }

    const resetState = () => {
        setSearchQuery("");
    }

    return (
       <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        name="searchQuery"
                        value={searchQuery}
                onChange={handleSearchQueryChange} />
            </SearchForm>
    )
}

SearchBar.propTypes = {
        onSubmit: PropTypes.func,
    }

export default SearchBar;
