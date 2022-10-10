import React from 'react';
import logo from '../../logo.png';

const Nav = () => {
    return (
        <nav className='bg-slate-800 h-40 sm:h-40 md:h-20 lg:h-20 text-white flex items-center justify-between px-20 text-xl font-bold'>
            <div className='sm:grid md:flex lg:flex sm:items-center sm:justify-center items-center justify-betweens  space-x-4 text-yellow-400'>
                <img src={logo} alt="" className='h-16 w-16 rounded-full' />
                <h1 className='text-2xl'>Quiz Game</h1>
            </div>
            <div className='flex items-center justify-between space-x-20'>
                <div className='hover:text-orange-300'>
                    <a href="/home">Home</a>
                </div>
                <div className='hover:text-orange-300'>
                    <a href="/statistic">Statistic</a>
                </div>
                <div className='hover:text-orange-300'>
                    <a href="/blog">Blog</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;