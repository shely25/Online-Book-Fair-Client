import React from 'react';
import picture from '../Images/information.jpg'

const Information = () => {
    return (
        <div className='mt-16'>
            <div className="mb-16"></div>
            <div class="card lg:card-side bg-base-100 px-16">
                <div class="card-body w-1/2">
                    <h2 class="card-title">Need More Information?</h2>
                    <p>If you want to learn more about pricing, implementation, or anything else Commerce Cloud related, get in touch today. Our product experts are standing by and ready to help..</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Contact With Admin</button>
                    </div>
                </div >
                <figure><img src={picture} alt="Album" /></figure>
            </div>
        </div>
    );
};

export default Information;