import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css'

const Stalls = () => {
    const [stalls, setStalls] = useState([])
    useEffect(() => {
        fetch('http://localhost/getStalls.php')
            .then(res => res.json())
            .then(data => setStalls(data))
    }, []
    )
    return (
        <div className='m-12'>
            <h1 className='text-center mt-12 text-2xl'>The smell of books, the sight of shelves, and the spirit of learning. There’s nothing like it</h1>
            <div className='cards grid lg:grid-cols-3 mt-12 gap-20'>
                {
                    stalls.map(stall => <Card stall={stall}></Card>)
                }

            </div>
        </div>
    );
};

export default Stalls;