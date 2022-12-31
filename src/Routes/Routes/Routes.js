import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment"
import AvailableAppointments from "../../Pages/Appointment/AvailableAppointments"
import ContactUs from "../../Pages/ContactUs/ContactUs"
import DisplayError from "../../Pages/DisplayError/DisplayError"
import Home from "../../Pages/Home/Home/Home"
import OurAllService from "../../Pages/Home/OurAllService/OurAllService"
import TestimonialsMore from "../../Pages/Home/Testimonials/TestimonialsMore"
import Login from "../../Pages/Login/Login"
import OurPortfolio from "../../Pages/OurPortfolio/OurPortfolio"
import OurTeam from "../../Pages/OurTeam/OurTeam"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/OurPortfolio',
                element: <OurPortfolio></OurPortfolio>
            },
            {
                path: '/OurTeam',
                element: <OurTeam></OurTeam>
            },
            {
                path: '/ContactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/ourAllService',
                element: <OurAllService></OurAllService>
            },
            {

                path: '/TestimonialsMore',
                element: <TestimonialsMore></TestimonialsMore>

            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/availableAppointments',
                element: <AvailableAppointments></AvailableAppointments>
            }
        ]
    }
])