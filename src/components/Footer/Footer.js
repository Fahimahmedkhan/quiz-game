import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-slate-700 h-40'>
            <div className="icons">
                <a href="https://www.instagram.com/fahim_ahmed_khan_gorbo/" className="icon icon--instagram" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/Fahim_Gorbo" className="icon icon--twitter" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/fahim-ahmed-khan-gorbo/" className="icon icon--linkedin" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Fahimahmedkhan" className="icon icon--github" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <div className='text-white text-center text-xl'>
                <p className='hover:text-orange-400'>Fahim Ahmed <i className="fa-regular fa-copyright"></i> 2022</p>
            </div>
        </div>
    );
};

export default Footer;