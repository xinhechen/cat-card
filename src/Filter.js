import React from 'react';

const Filter = ({ filterOptions }) => {
    const optionElements = filterOptions.map((opt, index) => { return <option>{ opt }</option>});
    return(
        <div>
            <select>
                { optionElements }
            </select>
        </div>
    );
}
export default Filter;