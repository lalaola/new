import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Portofolio from '../pages/portofolio';

const Rute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portofolio" element={<Portofolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
}

export default Rute;
