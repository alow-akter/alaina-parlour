import React from 'react';

const AppointmentOption = ({ appointmentOptions, setTreatment }) => {
    const { name, slots } = appointmentOptions
    return (
        <div className="card  shadow-xl mt-10 lg:mx-6">
            <div className="card-body justify-center items-center">
                <h2 className="card-title text-center text-pink-600">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} space available</p>
                <div className="card-actions justify-center">

                    <label htmlFor="booking-modal" className="btn btn-primary bg-pink-400 border-none text-white"
                        onClick={() => setTreatment(appointmentOptions)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;