import React from 'react';

const Review = ({ comment }) => {
    const { img, msg, city, name } = comment
    return (
        <div className='shadow-xl p-5 py-3 my-3 rounded-lg'>
            <p>{msg}</p>
            <div className='flex my-5'>
                <img src={img} alt="" />
                <div className='p-4'>
                    <h3 className='font-bold' style={{ color: '#3A4256' }}>{name}</h3>
                    <h3>{city}</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;