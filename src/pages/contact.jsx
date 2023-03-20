import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef ();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rt225xs', 'template_qjjkvbt', form.current, 'user_kHXmQRxujLkKvavE8zNF0')
        .then((result) => {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Pesan berhasil dikirim!',
                showConfirmButton: false,
                timer: 1500
            })
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        });
      };
    
    return (
        <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: .2, duration: 3, type: "spring", stiffness: 100 }}
        
        className='contact col-10'>
            <h1>Contact</h1>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="form col-10 col-lg-6 ">
                    <form ref={form} onSubmit={sendEmail} >
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>   
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Massage</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button  type="submit" className="btn btn-warning">Submit</button>
                    </form>
                </div>
                <div className="text-contact col-10 col-lg-5">
                    <h5>- If you have questions about me or want to submit Information, Suggestions, Experiences with me , please fill out the form next to this.</h5>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
