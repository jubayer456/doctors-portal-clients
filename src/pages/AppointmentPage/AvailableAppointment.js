import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
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
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} />}
        </div>
    );
};

export default AvailableAppointment;