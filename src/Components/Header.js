import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Cookies from 'js-cookie';

const Header = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost/get.php')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const [user] = useAuthState(auth)
    const handleSignout = () => {
        signOut(auth)
    }
    // console.log(users)
    let admin = 0
    let u = 0
    let ltime
    if (user) {
        let search = user?.email
        const result = users?.find(r => r?.email == search)
        const role = result?.Role
        console.log(role)
        ltime = sessionStorage?.getItem('time')
        ltime = JSON.parse(ltime)
        if (role == 'admin') {
            // sessionStorage.setItem('role', JSON.stringify(role))
            Cookies.set('role', 'admin')
            admin = 1
            u = 0;
        }
        else {
            //sessionStorage.setItem('role', JSON.stringify(role))
            Cookies.set('role', 'user')
            u = 1
        }
    }
    else {
        //sessionStorage.clear()
        Cookies.remove('role')
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            {
                                admin ?
                                    <>
                                        <li><Link to="/createstall">Create Stall</Link></li>
                                        <li><Link to="/createadmin">Create Admin</Link></li></>
                                    :
                                    <></>
                            }
                            {
                                u ?
                                    <li><Link to="/addreview">Add Review</Link></li>

                                    :
                                    <></>
                            }
                            {
                                user ?
                                    <>
                                        <li>
                                            <button className='border-0 text-black'>{user?.displayName}</button>
                                        </li>
                                        <li>
                                            <button className='border-0'>{user.email}</button>
                                        </li>
                                        <li>
                                            <Link to='/myprofile'>My Profile</Link>
                                        </li>
                                        <li>
                                            <button className='border-0' onClick={handleSignout}>Sign Out</button>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <Link to='/login'>Log In</Link>
                                        </li>
                                        <li>
                                            <Link to='/Rsegister'>Register</Link>
                                        </li>
                                    </>

                            }
                            <li><Link to="/users">Users</Link></li>

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Boi Bari
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        {
                            admin ?
                                <>
                                    <li><Link to="/createstall">Create Stall</Link></li>
                                    <li><Link to="/createadmin">Create Admin</Link></li></>
                                :
                                <></>
                        }
                        {
                            u ?
                                <li><Link to="/addreview">Add Review</Link></li>

                                :
                                <></>
                        }
                        {
                            user ?
                                <>
                                    <li>
                                        <button className='border-0'>{user?.displayName}</button>
                                    </li>
                                    <li>
                                        <button className='border-0'>{user.email}</button>
                                    </li>
                                    <li>
                                        <button className='border-0'>Log in Time: {ltime}</button>
                                    </li>
                                    <li>
                                        <Link to='/myprofile'>My Profile</Link>
                                    </li>
                                    <li>
                                        <button className='border-0' onClick={handleSignout}>Sign Out</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link to='/login'>Log In</Link>
                                    </li>
                                    <li>
                                        <Link to='/Register'>Register</Link>
                                    </li>
                                </>

                        }
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;