import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from "../utils/axios";

const Register = () => {
    const [agreed, setAgreed] = useState(false)

    const navigate = useNavigate();

    // const changeValue = (e: any) => {
    //     const { value, id } = e.target;
    //     setParams({ ...params, [id]: value });
    // };

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

        // const email = value.email;
        // const password = value.password;
        const pwd = value.password;
        const conf_pwd = value.confirm_password;

        if(pwd !== conf_pwd){
            showMessage(`Passwords don't match`, 'error')
            return;
        }

        if(agreed !== true){
            showMessage(`Please agree to Policy`, 'error')
            return;
        }

        // console.log(value)

        try {
            // const response = await Axios.post('/register', { userType, email, password });
            const response = await Axios.post('/api/account/register', value);

            // console.log({ response })

            const { status, statusText, data: { message, msg } } = response;

            // if(status >= 200 && status < 300){
            if(status === 200){
                navigate('/auth/signin');
                showMessage(message || msg)
            }

            if(status > 299) showMessage(message || msg || statusText, 'error')

        } catch (err) {
            
            if(typeof (err) === "string"){
              console.error(err);
              showMessage(err, 'error');
            }
            
            if(typeof (err.msg[0]) === "string"){
              console.error(err.msg[0]);
              showMessage(err.msg[0], 'error')
            }

            if(typeof (err.message) === "string"){
              console.error(err.message);
              showMessage(err.message, 'error')
            }
        }
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
    <div className="py-12 w-1/2 mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register as A Doctor / Nurse</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Please contact admin for key before registration
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={SubmitFunction} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    autoComplete="confirm_password"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486] focus:ring-bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? 'bg-bg-[#20B486]' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-bg-[#20B486] focus:ring-offset-2'
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? 'translate-x-5' : 'translate-x-0',
                          'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">
                      By selecting this, you agree to the{' '}
                      <a href="#" className="font-medium text-gray-700 underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-700 underline">
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#20B486] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-bg-[#20B486] focus:outline-none focus:ring-2 focus:ring-bg-[#20B486] focus:ring-offset-2"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
    </div>
    )
}

export default Register