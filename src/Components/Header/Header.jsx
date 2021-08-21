import React from 'react';

import './Header.css';

const Header = ({ isLoggedIn, onLogIn, onLogOut, name }) => {
    let onClickCallback = onLogIn;
    let buttonText = "LogIn";

    if(isLoggedIn){
        onClickCallback = onLogOut;
        buttonText = 'LogOut';
    }
    console.log('Header: ', isLoggedIn);
    return (
        <header className = "header">
        <p>My React Blog</p>
        {isLoggedIn ? <p>{name}</p> : <></>}
        <button onClick = {onClickCallback}>{buttonText}</button>
        </header>
    );
};

export { Header}; 