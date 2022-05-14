import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='p-12 '>
            <h4 className='text-center text-secondary text-2xl'>Available appointment on {format(date, 'pp')}</h4>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 '>
                {
                    services.map(service => <Service key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;