import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { hamburgerMenu, lock, logo, close } from '../assets'

const navbarRoutes = [
  // { name: "Home", url: "/home", isAuthenticated: false },
  { name: "Home", url: "/", isAuthenticated: false },
  { name: "About", url: "/about", isAuthenticated: false },
  { name: "Contact Us", url: "/contact", isAuthenticated: false },
  { name: "Feature", url: "/feature", isAuthenticated: false },
  // { name: "Add Record", url: "/record/add", isAuthenticated: true },
  // { name: "View Records", url: "/record/view", isAuthenticated: true },
]


const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <img src={logo} className='max-h-[50px]'/>
        <div className='hidden md:flex items-center'>
          <ul className='flex gap-4'>
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
            <button className='flex sm:mt-3 justify-between items-center bg-transparent px-6 gap-2'>
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