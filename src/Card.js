import React from 'react';
import './Card.css';
const Card = ({name, baseClass, rank}) =>{
    return (
        <div className='card'>
            <img alt = 'cat'src='https://placekitten.com/200/200'/>
            <div>
                <h2>{name}</h2>
                <p>{baseClass}</p>
                <p>{rank}</p>
            </div>
        </div>
    );
}
export default Card;