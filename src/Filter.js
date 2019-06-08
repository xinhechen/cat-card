import React from 'react';

const Filter = ({ filterOptions, selectChange }) => {
    const optionElements = filterOptions.map((opt, index) => { return <option>{ opt }</option>});
    return(
        <div>
            <select onSelect = {selectChange}>
                { optionElements }
            </select>
        </div>
    );
}
export default Filter;