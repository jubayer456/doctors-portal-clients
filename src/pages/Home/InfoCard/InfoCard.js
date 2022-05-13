import React from 'react';

const InfoCard = ({ img, bgClass, cardDetails, cardTitel }) => {
    return (
        <div className={`card lg:card-side shadow-xl bg-accent ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitel}</h2>
                <p>{cardDetails}</p>
            </div>
        </div>
    );
};

export default InfoCard;