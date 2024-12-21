import React from 'react';
import Animation from '../../assets/404.gif';

const NotFound = () => {
    return (
        <div className='min-h-screen flex place-content-center items-center bg-gray-100'>
            <img className='w-1/2 max-w-md' src={Animation} alt="404 Animation" />
        </div>
    );
};

export default NotFound;
