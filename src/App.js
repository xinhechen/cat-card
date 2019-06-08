import React, { Component } from 'react';
import CardList from './CardList';
import Filter from './Filter';
import { cats } from './Cats';
import SearchBox from './SearchBox';
import _ from 'lodash';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchfield:'',
            filterTypes: ['base class', 'rank'],
            baseClass: ['may','luca','potato'],
            rank: ['N','R','SR'],
            selectedFilter:[],
        };
        this.emitChange = _.debounce(this.onSearchChange, 500);
    }
    componentDidMount = () => {
        this.setState({ cats: cats});
    }

    handleChange = event => {
        this.emitChange(event.target.value);
    }

    onSearchChange = (value) => {
        this.setState({ searchfield: value });
    }

    onFilterTypeChange = (event) => {
        if(event.target.value === 'base class')
            this.setState({ selectedFilter: this.state.baseClass });
        else if(event.target.value === 'rank')
            this.setState({selectedFilter: this.state.rank});

        // this.setState({selectedFilter: event.target.vale });
    }

    render() {
        const filtered = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div>
                <h1 >Cat Cards</h1>
                <SearchBox searchChange = {this.handleChange}/>
                <Filter filterOptions = {this.state.filterTypes} selectChange = {this.onFilterTypeChange}/>
                <Filter filterOptions = {this.state.selectedFilter} selectChange =  {this.onFilterTypeChange}/>
                <CardList cats={filtered} />
            </div>
        )
    }
}

export default App;