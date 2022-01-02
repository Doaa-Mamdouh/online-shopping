import React from 'react';
import logo from '../../../assets/img/logo.png';

export default function Logo() {
    return (
        <div className="header-logo col-md-4 col-12">
            <a href="/" className="logo"><img src={logo} alt="logo"/></a>
        </div>
    )
}