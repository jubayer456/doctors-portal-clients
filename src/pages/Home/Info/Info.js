import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import img1 from '../../../assets/icons/clock.svg'
import img3 from '../../../assets/icons/marker.svg'
import img2 from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 pb-8'>
            <InfoCard img={img1} cardDetails='Lorem Ipsum is simply dummy text of the pri' bgClass='bg-secondary' cardTitel='Opening Hours' ></InfoCard>
            <InfoCard img={img2} cardDetails='Brooklyn, NY 10036, United States' bgClass='bg-accent' cardTitel='Visit our location'></InfoCard>
            <InfoCard img={img3} cardDetails='+000 123 456789' bgClass='bg-secondary' cardTitel='Contact us now'></InfoCard>
        </div>
    );
};

export default Info;