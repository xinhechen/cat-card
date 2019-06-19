import React from 'react';

const Filter = ({ filterOptions, selectChange }) => {
    const optionElements = filterOptions.map((opt, index) => { return <option>{ opt }</option>});
    console.log(filterOptions);
    return(
        <div>
            <select onChange = {selectChange}>
                <option>Select Filter</option>
                { optionElements }
            </select>
        </div>
    );
}
export default Filter;