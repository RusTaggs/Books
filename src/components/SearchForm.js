import React from 'react';

const SearchForm = (props) => {
    return(
        <form action="" onSubmit={props.handleSubmit} className="searchForm">
            <input onChange={props.handleSearch} type = "text" placeholder="Search books..."/>
            <button type = "submit">Search</button>
            <select defaultValue="Relevance" onChange={props.handleSort}>
                <option value="Relevance">Relevance</option>
                <option value="Newest">Newest</option>
            </select>
        </form>
    )
}

export default SearchForm;