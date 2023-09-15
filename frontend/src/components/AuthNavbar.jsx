import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from '@headlessui/react';
import { hamburgerMenu, lock, logo, close } from '../assets'
import { showMessage } from '../pages/AddRecord1';

import { logout } from '../store/userSlice'
import { logoutClearRecords } from '../store/patientSlice';
import Axios from '../utils/axios'

const navbarRoutes = [
  // { name: "Home", url: "/home", isAuthenticated: false },
  { name: "Add Record", url: "/record/add", isAuthenticated: true },
  { name: "View Records", url: "/record/view", isAuthenticated: true },
];

const ToggleRegister = async (e) => {
  try {
    const { status, data: { msg, toggleStatus }} = await Axios.patch('/api/settings/register/toggle');
    if(status === 200 || status === 204){
      showMessage(msg, toggleStatus ? 'success' : 'error');
    }

  } catch (err) {
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
  }
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const [agreed,setAgreed]=useState(false)
  const handleClick = ()=> setToggle(!toggle)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    // Dispatch the logout action
    dispatch(logout());
    dispatch(logoutClearRecords());
    navigate('/')
  };

  const legitUser = useSelector((state) => state.User.data) !== null ? true : false;

  if(legitUser === false){
    dispatch(logout());
    dispatch(logoutClearRecords());
    navigate('/')
  }
  
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <img src={logo} className='max-h-[50px]'/>
        <div className='hidden md:flex items-center align-middle'>
          <ul className='flex gap-4 align-items-center'>
            { 
              navbarRoutes.map(nav => 
                <NavLink key={nav.name} to={nav.url}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                  }
                >
                  {nav.name}
                </NavLink>
              )
            }
            <div className='flex justify-center align-middle'>
              <div>Registration</div>
              <div className="flex-shrink-0">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-[#20B486]' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-bg-[#20B486] focus:ring-offset-2'
                  )}
                  onClick={e => ToggleRegister(e)}
                >
                  
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-5' : 'translate-x-0',
                      'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
            </div>
          </ul>
        </div>

        <div className='hidden md:flex'>
          <NavLink to={'/auth/signin'}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }
          >
            <button onClick={e => handleLogout(e)}
              className='px-8 py-3 rounded-md bg-[#dd2222] text-white font-bold'>Logout</button>
          </NavLink>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          <img src={toggle?close:hamburgerMenu} />
        </div>
      </div>

      <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
        <ul>
          { 
            navbarRoutes.map(nav => 
            <li key={nav.name}>
              <NavLink to={nav.url}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                {nav.name}
              </NavLink>
            </li>
            )
          }
          <div className='flex flex-col my-4 gap-4 justify-center align-middle'>
            <NavLink to={'/auth/signin'} 
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                <img src={lock} />
                Login
              </button>
            </NavLink>
            <NavLink to={'/auth/signup'} 
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Sign Up</button>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar