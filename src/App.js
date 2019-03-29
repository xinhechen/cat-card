import React from 'react';
import CardList from './CardList';
import { cats } from './Cats';
import SearchBox from './SearchBox';
const App = () => {
    return (
        <div>
            <h1>Cat Cards</h1>
            <SearchBox />
            <CardList cats={cats} />
        </div>
    )
}

export default App;