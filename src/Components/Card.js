import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card.css'

const Card = props => {

    const { id, name, Image, Genre, Writers } = props.stall
    const navigate = useNavigate()
    const buttonClick = (id) => {
        navigate(`/books/${id}`)
    }
    return (
        <div className='card'>
            <img src={Image} alt=''></img>
            <h1 className='name'>{name}</h1>
            <p><span className='name'>Writers: </span>{Writers}</p>
            <p><span className='name'>Types of Books: </span>{Genre}</p>
            <button onClick={() => buttonClick(id)} className='btn mt-3 w-40'>Show Books</button>
        </div>
    );
};

export default Card;