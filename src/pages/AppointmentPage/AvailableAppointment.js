import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const fromated = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', fromated], () =>
        fetch(`http://localhost:5000/available?date=${fromated}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${fromated}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [fromated])

    return (
        <div className='p-12 '>
            <h4 className='text-center text-secondary text-2xl'>Available appointment on {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 '>
                {
                    services?.map(service => <Service key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointment;