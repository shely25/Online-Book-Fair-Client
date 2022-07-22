import React from 'react';
import './Card.css'

const Card = props => {
    const { name, Image, Genre, Writers } = props.stall
    return (
        <div className='card'>
            <img src={Image} alt=''></img>
            <h1>{name}</h1>
            <p>Name of the Book Writer:{Writers}</p>
            <p>Name of the type of the books which are writers write:{Genre}</p>
        </div>
    );
};

export default Card;