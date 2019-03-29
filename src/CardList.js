import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {
    return(
    <div>
        {
            cats.map((cat,i) =>{
                return (
                <Card 
                name={cats[i].name} 
                baseClass={cats[i].baseClass} 
                rank={cats[i].rank} 
                />);
            })
        }
    </div>
    ); 
}
export default CardList;