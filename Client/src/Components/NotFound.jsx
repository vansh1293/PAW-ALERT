import React from 'react'
import Animation from '../Assets/404.gif'
const NotFound = () => {
    return (
        <div className='min-h-screen flex place-content-center'>
            <img className='w-1/2' src={Animation} alt="" />
        </div>
    )
}

export default NotFound