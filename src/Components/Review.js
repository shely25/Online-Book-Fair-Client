import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import background from '../Images/banner1.avif'

const Review = () => {
    const [reviews, setReviews] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch('http://localhost/getaddReview.php')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="divider mt-16"></div>
            <h1 className='text-center mt-16 text-3xl '>What Our Customers Says</h1>
            <div className='grid lg:grid-cols-3 '>
                {
                    reviews.map(review => <div className="card m-8 w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={background} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{user?.displayName}</h2>
                            <p>{review.review}</p>
                            <p>Rattings : {review.rattings}</p>
                            {/* <p>{review.created_at}</p> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;