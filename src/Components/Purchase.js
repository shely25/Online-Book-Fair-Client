import React from 'react';

const Purchase = () => {
    let ordersName = []
    ordersName = localStorage.getItem('orders')
    ordersName = JSON.parse(ordersName)
    console.log(ordersName)
    const handlebtn = () => {
        const proceed = window.confirm("Are you sure to confirm order")
        if (proceed) {
            alert("Your order confirm")
        }
    }
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
            <button onClick={handlebtn} className='btn btn-secondary mt-24'>Confirm Order</button>
        </div>
    );
};

export default Purchase;