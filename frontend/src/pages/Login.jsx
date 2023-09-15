import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { loginUser } from '../store/userSlice'

const Login = () => {
    const [agreed, setAgreed] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const changeValue = (e: any) => {
    //     const { value, id } = e.target;
    //     setParams({ ...params, [id]: value });
    // };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const showMessage = (msg = '', type = 'success') => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 10px',
        });
    };

    const SubmitFunction = async(event) => {
        event.preventDefault()
        console.log({ target: event.target })

        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());
        const pwd = value.password;

        if(pwd.length < 6){
            showMessage(`Minimum Password length is 6`, 'error')
            return;
        }

        // console.log(value)


            // const response = await Axios.post('/register', { userType, email, password });
            dispatch(loginUser(value))
            .then((res) => {
                // console.log({ LOGINRES: res })
                if(res.meta.requestStatus === "fulfilled"){
                    navigate('/record/add')
                }
            })      
            .catch((err) => {
                // Handle any errors that occurred during login
                console.error('Login error:', err);

                if(typeof (err) === "string"){
                    console.error(err);
                    showMessage(err, 'error');
                }
                  
                if(Array.isArray(err.msg)){
                    console.error(err.msg[0]);
                    showMessage(err.msg[0], 'error')
                }
      
                if(typeof (err.message) === "string"){
                    console.error(err.message);
                    showMessage(err.message, 'error')
                }
            });


            // console.log({ response })

            // const { status, statusText, data: { message, msg } } = response;

            // if(status >= 200 && status < 300){

            // if(status === 200){
            //     navigate('/auth/signin');
            //     showMessage(message || msg)
            // }

            // if(status > 299) showMessage(message || msg || statusText, 'error')

    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={SubmitFunction} className="space-y-6" action="#" method="POST">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
                </label>
                <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-[#20B486] hover:text-[#20B486]">
                    Forgot password?
                    </a>
                </div>
                </div>
                <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                />
                </div>
            </div>

            <div className="sm:col-span-2">

                <div className="ml-3">
                <p className="text-base text-center text-gray-500">
                    By logging in, you agree to the{' '}
                    <br />
                    <a href="#" className="font-medium text-gray-700 underline">
                    Privacy & Cookie Policy
                    </a>{' '}
                </p>
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#20B486] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#20B486] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20B486]"
                >
                Sign in
                </button>
            </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-[#20B486] hover:text-[#20B486]">
                Start a 14 day free trial
            </a>
            </p>
        </div>
        </div>
    )
}

export default Login