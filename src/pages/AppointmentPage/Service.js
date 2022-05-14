import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-secondary text-2xl">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No slots availabe</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;