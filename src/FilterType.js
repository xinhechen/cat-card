import React, { Component } from 'react';
import Filter from './Filter';

class FilterType extends Component {
    constructor() {
        super();
        this.state = {
            filterTypes: ['base class', 'rank'],
            baseClass: ['may','luca','potato'],
            rank: ['N','R','SR'],
            selectedFilterType: [],
            selectedFilter: '',
        }
    }

    onFilterTypeChange = (event) => {
        if(event.target.value === 'base class')
            this.setState({ 
                selectedFilterType: this.state.baseClass,
                selectedFilter: 'base class',
             });
        else if(event.target.value === 'rank')
            this.setState({
                selectedFilterType: this.state.rank,
                selectedFilter:'rank',
            });
        else
            this.setState({selectedFilterType: []});

        // this.setState({selectedFilter: event.target.vale });
    }
    onFilterChange = (event) => {
        this.props.onFilter([this.state.selectedFilter,event.target.value]);
    }

    render() {
        return (
        <div>
            <Filter filterOptions = {this.state.filterTypes} selectChange = {this.onFilterTypeChange}/>
            <Filter filterOptions = {this.state.selectedFilterType} selectChange =  {this.onFilterChange}/>
        </div>
        )
    }
}

export default FilterType;