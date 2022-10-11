import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails = useLoaderData();

    const quizzes = quizDetails.data;
    // console.log(quizzes)
    const questions = quizzes.questions;
    // console.log(questions)
    // questions.map(question => console.log(question))

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
            </div>
            <div className='border-2 rounded-lg bg-red-300 h-28'>
                <h1>{quizzes.name}</h1>
            </div>
        </div>
    );
};

export default QuizDetails;