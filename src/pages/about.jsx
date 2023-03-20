import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
    return (
        <div className='d-flex flex-column'>
            <div className='about d-flex align-items-center flex-wrap'>
                <div className="col-4">
                    <div className="image col-10">
                        <img className='img-fluid' src="https://islahkhofifa.netlify.app/static/media/profil.1b9c29c3cd12812b1f86.png" alt="" />
                    </div>
                </div>
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className='col-10 col-md-6'>
                                    <h1 className='title-about'>About <span>Me</span></h1>

                    <h3>Front-end Developer</h3>
                    <p>I'Am - Islah, Front-end developer with proven experience in responsive design in creating a website or application user interface. Experienced in browser testing and debugging in several projects. Have extensive skills to ensure the program’s appearance is designed according to the UI/UX’s technical design using updated technology such as Reat.js, Rest-Api and etc.</p>
                    {/* <button className='btn btn-warning'>Downloud CV</button> */}
                </motion.div>

            </div>
        </div>
    );
}

export default About;
