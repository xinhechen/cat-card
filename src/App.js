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
        };
        this.changed = _.debounce(this.onSearchChange, 500);
    }
    componentDidMount = () => {
        this.setState({ cats: cats});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filtered = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div>
                <h1 >Cat Cards</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Filter filterOptions={['may','luca','potato']}/>
                <CardList cats={filtered} />
            </div>
        )
    }
}

export default App;