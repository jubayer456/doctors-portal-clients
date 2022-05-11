import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
const Services = () => {
    return (
        <div className='text-center  text-xl'>
            <h1 className='text-primary font-bold uppercase'>Our Services</h1>
            <h2>Service we provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-12'>
                <ServiceCard img={img1} cardTitel='Fluoride Treatment' ></ServiceCard>
                <ServiceCard img={img2} cardTitel='Cavity Filling' ></ServiceCard>
                <ServiceCard img={img3} cardTitel='Teeth Whitening' ></ServiceCard>
            </div>
        </div>
    );
};

export default Services;