import React from 'react';
import { Link } from 'react-router-dom';
import Bear from '../../Assets/Bear.png';
import Bird from '../../Assets/Bird.png';
import Flamingo from '../../Assets/Flamingo.png';

const HomePage = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-gradient-to-tr from-black via-gray-900 to-violet-950 flex flex-col items-center justify-center relative">
            <div className="relative top-0 flex justify-center space-x-4 md:space-x-8 mb-8">
                <div className="mb-1 sm:mb-6">
                    <img className="max-h-44 sm:max-h-48 md:max-h-64 lg:max-h-80" src={Bear} alt="Bear" />
                </div>
                <div className="mb-1 sm:mb-6">
                    <img className="max-h-44 sm:max-h-48 md:max-h-64 lg:max-h-80" src={Bird} alt="Bird" />
                </div>
                <div className="mb-1 sm:mb-6">
                    <img className="max-h-44 sm:max-h-48 md:max-h-64 lg:max-h-80" src={Flamingo} alt="Flamingo" />
                </div>
            </div>
            <div className="text-center px-6 sm:px-8 md:px-16 mt-1 sm:mt-6 flex flex-col gap-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    Welcome to Paw Alert!
                </h1>
                <p className="text-xl text-gray-300 mt-4">
                    "Protect Their World, Preserve Ours."
                </p>
                <Link to="/form">
                    <button className="mt-4 bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                        Save Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
