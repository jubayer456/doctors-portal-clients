import React from 'react';
import img from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div className=" py-8 my-8" style={{ background: `url(${img})` }}>
            <div className="text-center text-white ">
                <div className="max-w-md mx-auto">
                    <h3 className=" text-lg font-bold text-secondary">Contact Us</h3>
                    <p className='text-3xl pb-2 '>Stay connected with us</p>
                    <input className='block w-full my-4 rounded-sm p-2' type="email" name="email" id="" placeholder='Email' />
                    <input className='block w-full my-4 rounded-sm p-2' type="text" name="subject" id="" placeholder='Subject' />
                    <textarea className='block w-full my-4 rounded-sm p-2' name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                    <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;