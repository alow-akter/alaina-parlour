import React from 'react';
import { DayPicker } from 'react-day-picker';


const MakeAppointments = ({ seletedDate, setSeletedDate }) => {

    return (
        <div>
            <div className="hero mt-5">
                <div className="hero-content flex-col lg:flex-row-reverse flex justify-between">
                    <img src="http://atlas-content-cdn.pixelsquid.com/stock-images/standing-calendar-VaKvDw4-600.jpg" className="rounded-lg sm:w-full lg:w-1/2 h-[450px] shadow-2xl" alt='' />
                    <div className='p-14 bg-white rounded-xl lg:mr-28'>
                        <DayPicker
                            mode='single'
                            selected={seletedDate}
                            onSelect={setSeletedDate}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointments;