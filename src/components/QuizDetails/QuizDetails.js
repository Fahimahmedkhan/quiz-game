import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { ToastContainer } from 'react-toastify';
import { getFromDb } from '../../utilities/fakeDb';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quizzes = quizDetails.data;
    const questions = quizzes.questions;

    return (
        <div className='grid grid-cols-3 gap-10 p-8'>
            <div className='grid justify-center items-center gap-4 col-span-2'>
                <h1 className='text-5xl font-bold'>Quiz of {quizzes.name}</h1>
                {
                    questions.map(q => <Question
                        key={q.id}
                        question={q}
                    ></Question>)
                }
                <ToastContainer></ToastContainer>
            </div>
            <div className='border-2 rounded-lg bg-slate-700 h-60 text-white flex justify-center items-center'>
                <div>
                    <h1 className='text-5xl font-bold text-center mb-4'>{quizzes.name}</h1>
                    <p className='text-3xl font-semibold'>Correct Answer Count: {getFromDb()}</p>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;