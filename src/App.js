import React, { Component } from 'react';
import CardList from './CardList';
import { cats } from './Cats';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: cats,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filtered = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div>
                <h1>Cat Cards</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList cats={filtered} />
            </div>
        )
    }
}

export default App;