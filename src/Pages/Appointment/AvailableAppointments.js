import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ seletedDate }) => {
    return (
        <section className='mt-6'>
            <p className='text-center text-2xl font-semibold text-pink-600'>Available Appointments on {format(seletedDate, 'PP')}  </p>
        </section>
    );
};

export default AvailableAppointments;