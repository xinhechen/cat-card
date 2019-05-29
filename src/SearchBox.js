import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input
                type='search' 
                placeholder='search card' 
                onChange = {searchChange}
            />
        </div>  
    );
}
export default SearchBox;