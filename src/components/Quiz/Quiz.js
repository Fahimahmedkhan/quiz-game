import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo } = quiz;
    const removerFromLocalStorage = () => {
        localStorage.removeItem("correct-count");
    }
    return (
        <div className='border-2 rounded-lg px-4 py-5'>
            <img src={logo} alt="" className='w-52 bg-blue-200 rounded-lg' />
            <div className='grid grid-cols-2 mt-4'>
                <h2 className='text-2xl font-extrabold mt-2'>{name}</h2>
                <Link to={`/quiz/${id}`}>
                    <button className='border-2 rounded-lg gap-4 flex justify-center items-center font-semibold bg-slate-300 hover:bg-orange-400 text-xl hover:text-white' onClick={removerFromLocalStorage}>Start Practice <ArrowRightIcon className='w-4'></ArrowRightIcon></button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;