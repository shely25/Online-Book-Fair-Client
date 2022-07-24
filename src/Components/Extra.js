import React from 'react';
import picture from '../Images/logo.jpg'

const Extra = () => {
    return (
        <div class="card lg:card-side bg-base-100 mt-16 p-16">
            <figure><img src={picture} alt="Album" /></figure>
            <div class="card-body w-1/2">
                <h2 class="card-title">About US</h2>
                <p>Around 300 people are work together here.they are just awesome,hardworking and generous.Since 3 years they worked here and the result you can see.They work hard to make our warehouse famous.</p>
            </div>
        </div>
    );
};

export default Extra;