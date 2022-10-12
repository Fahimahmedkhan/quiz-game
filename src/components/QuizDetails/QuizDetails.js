import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { ToastContainer } from 'react-toastify';
import CorrectAnsCount from '../CorrectAnsCount/CorrectAnsCount';


const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quizzes = quizDetails.data;
    const questions = quizzes.questions;
    const get = localStorage.getItem('correct-count');

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 p-8'>
            <div className='grid justify-center items-center gap-4 lg:col-span-2'>
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
                <CorrectAnsCount
                    quizzes={quizzes}
                    get={get}
                ></CorrectAnsCount>
            </div>
        </div>
    );
};

export default QuizDetails;