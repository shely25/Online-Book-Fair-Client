
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './Card.css'

const Stall = () => {
    const [stalls, setStalls] = useState([])
    useEffect(() => {
        fetch('http://localhost/getStalls.php')
            .then(res => res.json())
            .then(data => setStalls(data))
    }, []
    )
    return (
        <div>
            <h1 className='text-2xl mt-16 text-center' style={{ color: 'skyblue' }}>Explore our wide selection of bookstalls</h1>
            <div className='cards grid gap-x-20 grid-cols-4 m-12'>
                {
                    stalls.slice(0, 3).map(stall => <Card stall={stall}></Card>)
                }
                <div className='see '>
                    <Link to='/Stalls'>See More</Link>
                </div>

            </div>
        </div>
    );
};

export default Stall;