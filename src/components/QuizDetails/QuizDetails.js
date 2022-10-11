import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quiz = quizDetails.data;

    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-5xl font-bold'>{quiz.name}</h1>
            
        </div>
    );
};

export default QuizDetails;