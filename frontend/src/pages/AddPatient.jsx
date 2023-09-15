import React, { useState } from 'react'
// import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addPatient, fetchPatients } from '../store/patientSlice';

const Register = () => {
    const [agreed, setAgreed] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetched = useSelector(state => state.Patients.fetched);


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

    if(fetched === false){
      dispatch(fetchPatients())
    }

    const SubmitFunction = async(event) => {
        event.preventDefault()
        console.log({ target: event.target })

        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());

        dispatch(addPatient(value))
        .then((res) => {
            // console.log({ LOGINRES: res })
            if(res.meta.requestStatus === "fulfilled"){
              navigate('/record/view');
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
      }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    if(fetched === false){
      dispatch(fetchPatients())
  }

    return (
    <div className="w-1/2 mx-auto py-12">
        <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register Patient</h2>
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
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
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
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="other_names" className="block text-sm font-medium text-gray-700">
                  Other names
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="other_names"
                    id="other_names"
                    autoComplete="other_names"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    autoComplete="dob"
                    className="block h-12 w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>
              
              <div className="">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="mt-1">
                  <select
                    required
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    className="block h-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-bg-[#20B486]2 focus:ring-bg-[#20B486]inset focus:ring-bg-[#20B486]bg-[#20B486] sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option></option>
                    <option value={"M"}>Male</option>
                    <option value={"F"}>Female</option>
                  </select>
                </div>
              </div>

              <div className="">
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Height (in cm)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="height"
                    id="height"
                    autoComplete="height"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Patient's Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="phone_alt" className="block text-sm font-medium text-gray-700">
                  Patient's Alternative Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone_alt"
                    id="phone_alt"
                    autoComplete="phone_alt"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="nok_name" className="block text-sm font-medium text-gray-700">
                  Next of Kin (Name)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="nok_name"
                    id="nok_name"
                    autoComplete="nok_name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="nok_contact" className="block text-sm font-medium text-gray-700">
                  Next of Kin (Contact)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="nok_contact"
                    id="nok_contact"
                    autoComplete="nok_contact"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]bg-[#20B486]"
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#20B486] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#20B490] focus:outline-none focus:ring-bg-[#20B486]2 focus:ring-bg-[#20B486]bg-[#20B486] focus:ring-bg-[#20B486]offset-2"
                >
                  Register Patient
                </button>
              </div>
            </form>
          </div>
    </div>
    )
}

export default Register