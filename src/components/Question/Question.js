import React from 'react';
import Option from '../Option/Option';

const Question = ({ question }) => {
    const { options } = question;
    return (
        <div className='border-2 border-lg border-black rounded-lg m-4 drop-shadow-lg p-4'>
            <h1 className='text-2xl'>{question.question}</h1>
            <div className='grid grid-cols-2 gap-2 mt-4'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>
            <p className='bg-green-200'></p>
        </div>
    );
};

export default Question;