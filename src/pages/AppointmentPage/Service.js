import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-2xl">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No slots availabe</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm bg-gradient-to-r from-secondary to-primary text-white uppercase border-0">book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;