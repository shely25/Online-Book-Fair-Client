import React from 'react';
import { useForm } from 'react-hook-form';

const CreateStall = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost/postStall.php'
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
        reset()
    };
    return (
        <div className='text-center'>
            <h1 className='my-8 text-2xl font-medium'>Create A New Stall</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Stall Name" className="input input-bordered w-full max-w-xs my-5" {...register("name")} />
                <br />
                <input type="text" placeholder="Writers" className="input input-bordered w-full max-w-xs my-5" {...register("Writers")} />
                <br />
                <input type="text" placeholder="Genre" className="input input-bordered w-full max-w-xs my-5" {...register("Genre")} />
                <br />
                <input type="text" placeholder="Image Url" className="input input-bordered w-full max-w-xs my-5" {...register("Image")} />
                <br />
                <input type="text" placeholder="Books" className="input input-bordered w-full max-w-xs my-5" {...register("Books")} />
                <br />
                <input className='btn' type="submit" value="Create" />
            </form>
        </div>
    );
};

export default CreateStall;