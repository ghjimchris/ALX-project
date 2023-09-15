import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import Axios from "../utils/axios";
import { addPatient } from "../store/patientSlice";

export const showMessage = (msg = '', type = 'success') => {
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

const AddRecord = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const changeValue = (e: any) => {
    //     const { value, id } = e.target;
    //     setParams({ ...params, [id]: value });
    // };


    const SubmitFunction = async(event) => {
        event.preventDefault()
        console.log({ target: event.target })

        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());

        // const email = value.email;
        // const password = value.password;

        // console.log(value)

        try {
            // const response = await Axios.post('/register', { userType, email, password });
            // const response = await Axios.post('/api/patient/add', value);
            dispatch(addPatient(value))

            navigate('/record/view');

            // console.log({ response })

            // const { status, statusText, data: { message, msg } } = response;

            // // if(status >= 200 && status < 300){
            // if(status === 200){
            //     navigate('/record/view');
            //     showMessage(message || msg)
            // }

            // if(status > 299) showMessage(message || msg || statusText, 'error')

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

            showMessage((err.msg[0] || err.message || err), 'error')
        }
    }

    async function saveUser() {
        
    }

    return (
    <form onSubmit={SubmitFunction}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Make sure to input a valid contact or email for future references.</p>

          <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="first_name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="last_name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="other_names" className="block text-sm font-medium leading-6 text-gray-900">
                Other names
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="other_names"
                  id="other_names"
                  autoComplete="other_names"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  required
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option></option>
                  <option value={"M"}>Male</option>
                  <option value={"F"}>Female</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  autoComplete="dob"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                Height (in cm)
              </label>
              <div className="mt-2">
                <input
                  id="height"
                  name="height"
                  type="number"
                  autoComplete="height"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Patient Phone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="nok_name" className="block text-sm font-medium leading-6 text-gray-900">
                Next of Kin (Name)
              </label>
              <div className="mt-2">
                <input
                  id="nok_name"
                  name="nok_name"
                  type="text"
                  autoComplete="nok_name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="nok_contact" className="block text-sm font-medium leading-6 text-gray-900">
                Next of kin (Phone)
              </label>
              <div className="mt-2">
                <input
                  id="nok_contact"
                  name="nok_contact"
                  type="text"
                  autoComplete="nok_contact"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-[#20B486] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-bg-[#20B486] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg-[#20B486] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-[#20B486]"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default AddRecord;