import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const loaderData = useLoaderData();
    const quizzes = loaderData.data;

    return (
        <div className='grid grid-cols-2 gap-20 p-20'>
            {
                quizzes.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;