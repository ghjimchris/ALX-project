import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { hamburgerMenu, lock, logo, close } from '../assets'

const Navbar = () => {

  const location = useLocation();
  
    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const all = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }
            const ul = selector.closest('ul.sub-menu');
            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [location]);

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <img src={logo} className='max-h-[50px]'/>
        <div className='hidden md:flex items-center'>
          <ul className='flex gap-4'>
            {/* <li>Home</li>
            <li>About</li>
            <li>Contact</li> */}

            {/* <Link to="/" className="main-logo flex items-center shrink-0">
              A
            </Link> */}

            <NavLink to="/" className="">Home</NavLink>
            <NavLink to="/about" className="">About</NavLink>
            <NavLink to="/contact" className="">Contact</NavLink>
          </ul>
        </div>

        <div className='hidden md:flex'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
            <img src={lock} />
            Login</button>
          <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Sign Up</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          <img src={toggle?close:hamburgerMenu} />
        </div>
      </div>

      <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
        <ul>
          <li className='p-4 hover:bg-gray-100'>Home</li>
          <li className='p-4 hover:bg-gray-100'>About Us</li>
          <li className='p-4 hover:bg-gray-100'>Find an Expert</li>
          <li className='p-4 hover:bg-gray-100'>About</li>
          <div className='flex flex-col my-4 gap-4'>
          <button className='border border-[#20B489] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
            <img src={lock} />
            Login</button>
          <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up
          </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar