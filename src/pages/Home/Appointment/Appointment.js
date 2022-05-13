import React from 'react';
import img1 from '../../../assets/images/doctor-small.png'
import img2 from '../../../assets/images/appointment.png'
const Appointment = () => {
    return (
        <div style={{
            background: `url(${img2})`
        }}>
            <div class="hero-content flex-col lg:flex-row  text-white my-20 p-12">
                <img src={img1} class="max-w-sm rounded-lg mt-[-100px] hidden lg:block  " alt='' />
                <div >
                    <h1 className='text-lg text-secondary font-bold'>Appointment</h1>
                    <h1 class="text-3xl">Make an appointment Today</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;