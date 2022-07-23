import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const CreateAdmin = () => {
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data)
        const url = `http://localhost/get.php/${id}`
        fetch(url, {
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

    };
    return (
        <div className='text-center mt-24 h-80'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs mt-5 " {...register("email")} />
                <br />
                <input className='btn mt-12' type="submit" value="Create" />
            </form>
        </div>
    );
};

export default CreateAdmin;