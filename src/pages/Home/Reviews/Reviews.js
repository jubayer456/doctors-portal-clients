import { comment } from 'postcss';
import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';
const Reviews = () => {
    const comments = [
        { _id: 1, msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", img: people1, name: "Winson Herray", city: "california" },
        { _id: 2, msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", img: people2, name: "Winson Herray", city: "california" },
        { _id: 3, msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", img: people3, name: "Winson Herray", city: "california" }
    ]
    return (
        <div className='p-12'>
            <h1 className='text-secondary font-bold'>Testimonial</h1>
            <h1 className='text-3xl'>What our patients says</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-6'>
                {
                    comments.map(comment => <Review
                        key={comment._id}
                        comment={comment}
                    ></Review>)
                }
            </div>


        </div>
    );
};

export default Reviews;