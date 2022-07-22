import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost/get.php')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='mx-24 my-5'>
            <p className='mb-7 text-center text-2xl font-semibold'>Our Happy Clients</p>
            <p className='text-2xl mb-4 text-center'>Books are timeless companions.
                <Link to='/register' className='text-secondary'>Come in and lose yourself in a book!</Link></p>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User-Name</th>
                        <th>User E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;