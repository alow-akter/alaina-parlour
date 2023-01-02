import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, seletedDate, setTreatment }) => {
    const { name, slots } = treatment
    const date = format(seletedDate, 'PP')


    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target
        const name = from.name.value;
        const slot = from.slot.value;
        const email = from.email.value
        const phone = from.phone.value

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
            //price,
        }
        console.log(booking);
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  bg-pink-300">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold ">{name}</h3>
                    <form onSubmit={handleSubmit} className='gap-4 grid grid-cols-1 p-2 rounded-lg mt-4'>
                        <input type="text" value={date} disabled className="input w-full input-bordered bg-slate-200" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) => <option value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" defaultValue="" className="input w-full input-bordered  " />
                        <input name="email" type="email" defaultValue="" placeholder="Your Email" className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Your Phone Number" className="input w-full input-bordered  " />
                        <input className='w-full  btn bg-pink-500 text-white border-none' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;