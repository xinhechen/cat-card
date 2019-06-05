import React from 'react';
import './SearchBox.css';
const SearchBox = ({ searchChange }) => {
    return (
        <div className='searchBox'>
            <input
                type='search' 
                placeholder='search card' 
                onChange = {searchChange}
            />
        </div>  
    );
}
export default SearchBox;