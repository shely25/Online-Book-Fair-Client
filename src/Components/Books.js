import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Books.css'

const Books = () => {
    const { id } = useParams()
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(`http://localhost/getStalls.php/`)
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    const Book = books.find(book => book.id == id)
    const BooksNames = Book?.Books.split(',')
    console.log(BooksNames)
    const [cart, setCart] = useState([])
    const handleCard = id => {
        //console.log(BooksNames[id])
        const newCart = [...cart, BooksNames[id]];
        setCart(newCart)
    }
    console.log(cart)
    return (
        <div className='forgrid'>
            <div className='mx-24 my-5'>
                <p className='mb-7 text-center text-2xl font-semibold'>{Book?.name}</p>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Books-Name</th>
                            <th>Purchase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            BooksNames?.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{BooksNames[index]}</td>
                                <td><button onClick={() => handleCard(index)}>Add to card</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
            <div className='my-5 p-5' style={{ borderLeft: '2px solid pink' }}>
                <p className='mb-7 text-center text-2xl font-semibold'>Your Orders</p>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Books-Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{cart[index]}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <button className='btn mt-5 btn-primary'><Link to='/purchase'>Purchase</Link></button>
            </div>
        </div>

    );
};

export default Books;