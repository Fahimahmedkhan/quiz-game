import React from 'react';

const Option = ({ correctAnswer, option }) => {

    return (
        <div className='border-2 border-lg border-black rounded-lg flex justify-center items-center gap-2 hover:bg-slate-500 hover:text-white text-xl'>
            <button>{option}</button>
        </div>
    );
};

export default Option;