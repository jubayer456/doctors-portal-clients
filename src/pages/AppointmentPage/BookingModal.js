import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth);
    const handelBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(name, _id, slot);
        setTreatment(false);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'pp')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn btn-accent  w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;