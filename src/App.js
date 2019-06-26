import React, { Component } from 'react';
import CardList from './CardList';
import FilterType from './FilterType';
import { cats } from './Cats';
import SearchBox from './SearchBox';
import _ from 'lodash';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchfield:'',
            filterfield:'',
            filtertype:'',
            selectedFilter:[],
            filtered:[],
        };
        this.emitChange = _.debounce(this.onSearchChange, 500);
    }
    componentDidMount = () => {
        this.setState({ 
            cats: cats,
            filtered: cats,
        });
    }

    handleChange = event => {
        this.emitChange(event.target.value);
    }

    onSearchChange = (value) => {
        this.setState({ 
            searchfield: value.toLowerCase(),
            filtered: this.state.cats.filter(cat => {
                return cat.name.toLowerCase().includes(value.toLowerCase());
            })
         });
    }

    onFilterChange = (value) => {
        this.setState({ 
            filtered: this.state.cats.filter(cat =>{
                console.log(value[0]);
                if(value[0] === 'base class')
                    return cat.baseClass.toLowerCase().includes(value[1]);
                else if(value[0] === 'rank')
                    return cat.rank === (value[1]);
            })
         });
    }


    render() {
        return (
            <div>
                <h1 >Cat Cards</h1>
                <SearchBox searchChange = {this.handleChange}/>
                <FilterType onFilter={this.onFilterChange}/>
                <CardList cats={this.state.filtered} />
            </div>
        )
    }
}

export default App;