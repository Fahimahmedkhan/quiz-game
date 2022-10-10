import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Nav = () => {
    return (
        <nav className='bg-slate-700 h-40 sm:h-40 md:h-20 lg:h-20 text-white flex items-center justify-between px-20 text-xl font-bold'>
            <div className='sm:grid md:flex lg:flex sm:items-center sm:justify-center items-center justify-betweens  space-x-4 text-yellow-400'>
                <img src={logo} alt="" className='h-16 w-16 rounded-full' />
                <Link to='/'><h1 className='text-2xl'>Quiz Game</h1></Link>
            </div>
            <div className='flex items-center justify-between space-x-20'>
                <div className='hover:text-orange-300'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='hover:text-orange-300'>
                    <Link to='/statistic'>Statistic</Link>
                </div>
                <div className='hover:text-orange-300'>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;