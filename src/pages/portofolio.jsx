import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../component/card/card';
import { data } from '../component/data/porto';
import { motion } from 'framer-motion';
const Portofolio = () => {
    const [nav, setNav] = useState('');
    const handleNav = (e) =>{
        setNav(e.target.id)
    }
    return (
        <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: .2, duration: 3, type: "spring", stiffness: 100 }}
        
        id="porto" className='porto col-11 mx-auto '>
            <div className='d-flex flex-porto align-items-center justify-content-between '>
                <li>
                    <h1>Portofolio</h1>
                </li>
                <li className=' col-11 col-lg-5 col-md-6 d-flex  justify-content-between'>
                    <NavLink id='' onClick={handleNav}>All</NavLink>
                    <NavLink id='react' onClick={handleNav}>React.Js</NavLink>
                    <NavLink id='laravel' onClick={handleNav}>Laravel</NavLink>
                    <NavLink id='design' onClick={handleNav}>Web Design</NavLink>
                </li>

            </div>
            <div>
                {data.filter(data => data.katagori.includes(nav)).map((data, index) => {
                    return (
                        <Card key={index} foto={data.foto} link={data.link} nama={data.nama} use={data.use} durasi={data.duration} desc={data.desc}/>
                    );
                })
                }

            </div>
        </motion.div>
    );
}

export default Portofolio;
