import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {
    return(
    <div>
        {
            cats.map((cat,i) =>{
                return (
                <Card 
                key = {cats[i].id}
                name={cats[i].name} 
                rank={cats[i].rank} 
                > 
                    {cats[i].baseClass}
                </Card>);
            })
        }
    </div>
    ); 
}
export default CardList;