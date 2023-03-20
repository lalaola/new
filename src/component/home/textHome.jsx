import React, { useState } from 'react';
import shop from '../../asset/image/shop.png'
import job from '../../asset/image/job.png'
import skz from '../../asset/image/skz.png'
import me from '../../asset/image/me.png'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"
import file from '../../asset/cv.pdf'

const TextHome = () => {
    const [nav, setNav] = useState("01");
    const dataContent = [
        {
            id: "01",
            judul: "Frontend ",
            span: " Developer",
            content: "Hello my name is Islah but if you want make a friend with me you can call me Olla",
            img : me
        },
        {
            id: "02",
            judul: "Inovatif ",
            span: " Technology",
            content: "Using cutting edge technologies to build scalable solutions, innovating where necessary.",
            img : shop
            
        },
        {
            id: "03",
            judul: "Creative ",
            span: " Design",
            content: "Crafting of digital experiences through interaction design by cultivating understanding.",
            img : skz
            
        },
        {
            id: "04",
            judul: "Great",
            span: "Teamwork",
            content: "Hello my name is Islah but if you want make a friend with me you can call me Olla",
            img : job
            
        }
    ]

    const handleClick = (e) => {
        setNav(e.target.innerHTML)
    }
    return (
        <div className='d-flex align-items-center '>
            <div className="navText justify-content-between flex-column d-flex col-1 ">
                <a href='#' onClick={handleClick}>01</a>
                <a href='#' onClick={handleClick}>02</a>
                <a href='#' onClick={handleClick} >03</a>
                <a href='#' onClick={handleClick}>04</a>
            </div>
            <div className="content-home ">
                {dataContent.filter(data => data.id == nav).map((data, index) => {
                    return (
                        <div key={index} className="d-flex align-items-center flex-wrap">
                            <motion.div 
                                animate={{ y:1}}
                                initial={{y:-400}}
                                transition={{ type: "spring", stiffness: 100 }}
                            className="text col-md-5 col-10">
                                <h1>{data.judul} <span>{data.span}</span></h1>
                                <h3>{data.content}</h3>
                                <div className="btn-grop mt-3">
                                    <NavLink to='/contact' className=' btn btn-dark'>Hire Me</NavLink>
                                    <a download=""  href={file} className='btn btn-light ms-3 '>Download CV</a>
                                </div>
                            </motion.div>
                            <motion.div
                             animate={{ opacity:1}}
                             initial={{opacity:0}}
                             transition={{ type: "spring", stiffness: 100 }}
                            className="image col-md-6 ms-3">
                                <img src={data.img} alt="" className='img-fluid' />
                            </motion.div>
                        </div>
                    );
                })
                }


            </div>

        </div>
    );
}

export default TextHome;
