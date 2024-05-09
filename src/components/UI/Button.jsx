import React from 'react';

const Button = ({ children, onClick, light }) => {
    let classes = `px-4 py-2 text-xs md:text-base rounded-md ${
        light ? '' : 'bg-stone-700 '
    } text-stone-${light ? '800' : '100'} hover:bg-stone-600 hover:text-stone-${
        light ? '950' : '100'
    }`;
    return (
        <button className={classes} style={{ color: 'white' }} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
