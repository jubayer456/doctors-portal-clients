import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import img from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className='hero min-h-screen ' >
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='shadow-2xl p-2 rounded-lg'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p>You pick  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;