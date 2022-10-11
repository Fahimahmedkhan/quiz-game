import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const loaderData = useLoaderData();
    const quizzes = loaderData.data;
    
    return (
        <div className='grid grid-cols-3 gap-10 p-8'>
            <div className='grid grid-cols-2 gap-4 col-span-2'>
                {
                    quizzes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
            <div className='border-2 rounded-lg bg-red-300 h-28'>
                <h1>correct ans</h1>
            </div>
        </div>
    );
};

export default Home;