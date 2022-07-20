import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost/get.php')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='mx-24 my-5'>
            <p className='mb-7 text-center text-2xl font-semibold'>Users Details</p>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>E-mail</th>
                        <th>operation</th>
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