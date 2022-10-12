import React from 'react';

const CorrectAnsCount = ({ get, quizzes }) => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-4'>{quizzes.name}</h1>
            <p className='text-3xl font-semibold'>Correct Answer Count: {get}</p>
        </div>
    );
};

export default CorrectAnsCount;