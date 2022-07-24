import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div style={{ margin: '100px', height: '50vh' }}>
            <h1 className='text-2xl font-semibold mb-16'>My Profile</h1>
            <div className='grid grid-cols-3'>
                <div class="avatar">
                    <div class="w-24 h-24 rounded-full">
                        <img src={user?.photoURL} alt='' />
                    </div>
                </div>
                <div style={{ fontSize: '25px' }}>
                    <p>Name : {user?.displayName}</p>
                    <p>Email : {user?.email}</p>
                    {/* <p>Education : {profile?.education}</p>
                    <p>Location : {profile?.location}</p>
                    <p>Phone Number : {profile?.number}</p>
                    <p>Linked In: {profile?.linkedin}</p> */}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;