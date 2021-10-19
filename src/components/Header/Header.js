import React from 'react';
import AccountMenu from './AccountMenu/AccountMenu';
import HeaderSocial from './HeaderSocial/HeaderSocial';
import Logo from './Logo/Logo';
import Menu from '../Header/SubHeader/Menu/Menu';
import Search from '../Header/SubHeader/Search/Search';

export default function Header({cartNum}) {
    return (
        <div>
            <div className="header-section section">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header-top-wrapper">
                                    <div className="row">
                                        <HeaderSocial />
                                        <Logo/>
                                        <AccountMenu cartNum={cartNum}/>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu/>
                <Search/>
            </div>
        </div>

    )
}