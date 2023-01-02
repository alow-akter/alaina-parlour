import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './MakeAppointments/AppointmentOption';

const AvailableAppointments = ({ seletedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }
        , [])
    return (
        <section className='my-6'>
            <p className='text-center text-2xl font-semibold text-pink-600'>Available Appointments on {format(seletedDate, 'PP')}  </p>
            <hr className='w-1/2 mx-auto mt-4' />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOptions={option}
                        setTreatment={setTreatment}
                    >
                    </AppointmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    seletedDate={seletedDate}
                    setTreatment={setTreatment}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;