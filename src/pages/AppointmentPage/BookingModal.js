import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, _id } = treatment;
    const handelBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(name, _id, slot);
        setTreatment(false);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box ">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'pp')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' class="btn btn-accent  w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;