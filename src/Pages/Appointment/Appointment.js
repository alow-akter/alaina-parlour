import React, { useState } from 'react';
import AvailableAppointments from './AvailableAppointments';
import MakeAppointments from './MakeAppointments/MakeAppointments';



const Appointment = () => {
    const [seletedDate, setSeletedDate] = useState(new Date())
    return (

        <div>
            <MakeAppointments seletedDate={seletedDate} setSeletedDate={setSeletedDate}></MakeAppointments>
            <AvailableAppointments seletedDate={seletedDate} setSeletedDate={setSeletedDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;