import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVBAR } from './navbar-pc';
import Sidebar from './sidebar';

const NavbarHp = () => {
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
        <div className='navbar-hp' onClick={handleMenu}>
           <h5> IO</h5>
           {getNavbar ? <Sidebar/> : ''}

        </div>
    );
}

export default NavbarHp;
