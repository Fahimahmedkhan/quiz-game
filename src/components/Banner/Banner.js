import React from 'react';
import banner from '../../utilities/question-mark.jpg';

const Banner = () => {
    return (
        <div>
            <figure className="relative  flex justify-center items-center">
                <img className="" src={banner} alt="" />
                <figcaption className="absolute px-4 sm:text-2xl md:text-4xl lg:text-6xl text-sky-900 text-center">
                    <p>"Our quiz games put the fun into learning. Your knowledge will be tested regarding a variety of subjects."</p>
                </figcaption>
            </figure>
        </div>
    );
};

export default Banner;