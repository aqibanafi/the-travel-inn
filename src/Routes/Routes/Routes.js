import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs/AboutUs';
import BandarbanBooking from '../../pages/BandarbanBooking/BandarbanBooking';
import Bandorban from '../../pages/Bandorban/Bandorban';
import BookingForm from '../../pages/BookingForm/BookingForm';
import CoxBazar from '../../pages/CoxBazar/CoxBazar';
import CoxBazarBooking from '../../pages/CoxBazarBooking/CoxBazarBooking';
import Home from '../../pages/Home/Home';
import Main from '../../pages/layout/Main';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
import SrimangalBooking from '../../pages/SrimangalBooking/SrimangalBooking';
import Srimongol from '../../pages/Srimongol/Srimongol';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


 
export const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/registration',
                    element: <Registration></Registration>
                },
                {
                    path: '/coxbazar',
                    element: <PrivateRoute><CoxBazar></CoxBazar></PrivateRoute>,
                    loader: () => fetch(' https://the-travel-inn-server-side.vercel.app/coxbazar')
                },
                {
                    path: '/bandarban',
                    element: <PrivateRoute><Bandorban></Bandorban></PrivateRoute>,
                    loader: () => fetch(' https://the-travel-inn-server-side.vercel.app/coxbazar')
                },
                {
                    path: '/srimangal',
                    element: <PrivateRoute><Srimongol></Srimongol></PrivateRoute>,
                    loader: () => fetch(' https://the-travel-inn-server-side.vercel.app/coxbazar')
                },
                {
                    path: '/coxbazarbooking',
                    element: <CoxBazarBooking></CoxBazarBooking>
                },
                {
                    path: '/bandarbonbooking',
                    element: <BandarbanBooking></BandarbanBooking>
                },
                {
                    path: '/srimangalbooking',
                    element: <SrimangalBooking></SrimangalBooking>
                },
                {
                    path: '/aboutus',
                    element: <AboutUs></AboutUs>
                },
                {
                    path: '/bookingform',
                    element: <BookingForm></BookingForm>
                }
            ]
        }
    ])