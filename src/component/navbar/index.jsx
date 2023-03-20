import React from 'react';
import NavbarPc from './navbar-pc';
import NavbarHp from './navbarHp';

const IndexNavbar = () => {
    return (
        <div className='navbar'>
            <NavbarPc/>
            <NavbarHp/>
        </div>
    );
}

export default IndexNavbar;
