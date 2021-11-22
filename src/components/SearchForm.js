import React from 'react';

const SearchForm = (props) => {
    return(
        <form action="" onSubmit={props.handleSubmit} className="searchForm">
            <input onChange={props.handleSearch} type = "text" placeholder="Search books..."/>
            <button type = "submit">Search</button>
        </form>
    )
}

export default SearchForm;