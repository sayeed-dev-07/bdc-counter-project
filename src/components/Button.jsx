import React from 'react';
import '../App.css'

const Button = ({ func, name, color }) => {
    return (
        <div className='w-full md:w-auto'>
            <button style={{backgroundColor:color}} onClick={func} className='px-8 py-[1.2rem] text-2xl cursor-pointer font-medium rounded-md text-white w-full'>{name}</button>
        </div>
    );
};

export default Button;