import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialLogin from './SocialLogin';
import './css.css'

const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    // const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
    //     auth
    // );
    let errorElement2
    if (error) {
        errorElement2 = error?.message
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }
    if (user) {
        const y = new Date().toLocaleTimeString()
        console.log(y)
        sessionStorage.setItem('time', JSON.stringify(y))
        navigate(from, { replace: true });
    }
    return (
        <div className='login'>
            <div className='text-center'>
                <h1 className='my-8 text-2xl font-medium'>Log In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Your Email" className="input input-bordered  w-full max-w-xs " {...register("email")} />
                    <br />
                    <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs my-5" {...register("password")} />
                    <br />
                    <input className='btn' type="submit" value="Log In" />
                </form>
                <p className='text-center my-2'>Are You New Here?<Link to='/register' className='text-blue-800'>Please register</Link></p>

                {errorElement2}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default LogIn;