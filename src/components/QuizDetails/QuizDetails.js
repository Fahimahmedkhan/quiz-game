import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { ToastContainer } from 'react-toastify';

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
            <div className='border-2 rounded-lg bg-red-300 h-28'>
                <h1>{quizzes.name}</h1>
            </div>
        </div>
    );
};

export default QuizDetails;