import React from 'react'
import Logo from './robinhood.svg';
import './Header.css';

function Header() {
    return (
        <div className="header__wrapper">

            {/* logo */}
            <div className="header__logo">
                <img src={Logo} width={25} />
            </div>

            {/* search */}
            <div className="header__search">
                <div className="header__searchContaine">
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            {/* menu item */}
            <div className="header__menuItem">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>

        </div>
    )
}

export default Header
