import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="judul">
                <h1>IslahOlla</h1>
            </div>
            <div className="submenu d-flex flex-column">
                <NavLink to = '/'>HOME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/portofolio">PORTOFOLIO</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>
            <div className="footer d-flex justify-content-between">
                <div className="alamat col-5 col-md-6">
                    <h3>Our URL in Real Life</h3>
                    <p>Palmerah, Jakarta Barat</p>
                </div>
                <div className="contact col-5">
                    <h3>Stalk me here</h3>
                    <div className="sosmed d-flex">
                        <p>apa</p>
                        <p>apa</p>
                        <p>apa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
