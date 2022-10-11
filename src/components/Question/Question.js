import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import Option from '../Option/Option';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    const { correctAnswer, options } = question;

    const notify = () => toast(correctAnswer);


    return (
        <div className='border-2 border-lg border-black rounded-lg m-4 drop-shadow-lg p-4 '>
            <div className='flex items-center justify-evenly'>
                <h1 className='text-2xl'>{question.question}</h1>
                <button onClick={notify} className='hover:text-orange-600'><EyeIcon className='w-6'></EyeIcon></button>
            </div>
            <div className='grid grid-cols-2 gap-2 mt-4 pt-5 pb-5'>
                {
                    options.map(option => <Option
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;