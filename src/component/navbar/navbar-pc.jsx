import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './sidebar';

export const NAVBAR = 'NAVBAR'
const NavbarPc = () => {
    const { getNavbar } = useSelector((state) => state.JobReducer)
    const dispatch = useDispatch()

    const handleMenu = () =>{
        dispatch(
            {
                type: NAVBAR,
                payload: {
                    data: getNavbar ? false : true
                }
            }
        )
    }
    return (
        <div onClick={handleMenu} className={`navbar-pc d-flex flex-column align-items-center ${getNavbar ? 'show' : ''}`}>
            <Sidebar/>
           <div className="nav-menu">
            <h5 className='p-3'>IO</h5> 
           <div  className="menu">
                <span>Menu</span>
            </div>
            </div>
        </div>
    );
}

export default NavbarPc;
