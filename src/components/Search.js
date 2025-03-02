import React from "react"

function Search({handleSearch}) {

    function handleChange(event) {
        const searchElement = event.target
        const searchText = searchElement.value
        console.log(event.target.value)
        handleSearch(searchText)
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={handleChange} />
        </div>
    );
}

export default Search;