import React from 'react';
import { doctor } from '../assets';
// import { AiOutlineSearch } from 'react-icons/ai';
import {AppName, AppCatch} from '../store/data'
import Container from '../pages/Container';

const Hero = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w[600px]'>
                <div className='flex flex-col justify-start gap-4'>
                    <p className='py-2 md: text-3xl text-5xl font-semibold'>Welcome To</p>
                    <h1 className='py-2 text-6xl text-[#20B486] font-bold'>{AppName}</h1>
                    <p className='py-2 text-lg text-gray-900'>Your health information and history all in one place.</p>
                    <form className='bg-white border max-w-[700px] p-4 input-bx-shadow rounded-md flex justify-between'>
                        <input className='py-4 bg-white'
                            type='text'
                            placeholder='Find a Patient' />
                        <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Search
                        </button>
                    </form>
                </div>
                <img className='md:order-last order-first' src={doctor} />
            </div>
        </div>
    )
}

const ContainedHero = () => (
    <Container Component={Hero} />
)

export default ContainedHero;