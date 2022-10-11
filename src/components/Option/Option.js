import React from 'react';
import { toast } from 'react-toastify';

const Option = ({ correctAnswer, option }) => {
    const checkCorrectAns = () => {
        if (option === correctAnswer) {
            return toast('Ding Dong! Answer is correct.');
        }
        else {
            return toast('Alas! Answer is Wrong.');
        }
    }
    return (
        <div className='border-2 border-lg border-black rounded-lg flex justify-center items-center gap-2 hover:bg-slate-500 hover:text-white text-xl'>
            <button onClick={checkCorrectAns}>{option}</button>
        </div>
    );
};

export default Option;