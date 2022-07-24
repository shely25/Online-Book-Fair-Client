import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    let ordersName = []
    ordersName = localStorage.getItem('orders')
    ordersName = JSON.parse(ordersName)
    console.log(ordersName)
    // const handlebtn = () => {
    //     const proceed = window.confirm("Are you sure to confirm order")
    //     if (proceed) {
    //         alert("Your order confirm")
    //     }
    // }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost/postPurchase.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
        reset()
    };

    return (
        <div className='mx-24 my-5'>
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
                        ordersName?.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{ordersName[index]}</td>
                        </tr>)
                    }
                </tbody>
            </table>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Name" className="input input-bordered  w-full max-w-xs mb-3 " {...register("name")} value={user?.displayName} />
                <br />
                <input type="email" placeholder="Your Email" className="input input-bordered  w-full max-w-xs mb-3 " {...register("email")} value={user?.email} />
                <br />
                <input type="text" placeholder="Your Address" className="input input-bordered  w-full max-w-xs mb-3 " {...register("Address")} />
                <br />
                <input type="number" placeholder="Your Phone Number" className="input input-bordered  w-full max-w-xs mb-3 " {...register("mobile")} />
                <br />

                <input className='btn btn-secondary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Purchase;