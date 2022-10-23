import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs/AboutUs';
import BandarbanBooking from '../../pages/BandarbanBooking/BandarbanBooking';
import Bandorban from '../../pages/Bandorban/Bandorban';
import CoxBazar from '../../pages/CoxBazar/CoxBazar';
import CoxBazarBooking from '../../pages/CoxBazarBooking/CoxBazarBooking';
import Home from '../../pages/Home/Home';
import Main from '../../pages/layout/Main';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
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
                    element: <CoxBazar></CoxBazar>,
                    loader: () => fetch('http://localhost:5000/coxbazar')
                },
                {
                    path: '/bandarban',
                    element: <Bandorban></Bandorban>,
                    loader: () => fetch('http://localhost:5000/coxbazar')
                },
                {
                    path: '/srimangal',
                    element: <Srimongol></Srimongol>,
                    loader: () => fetch('http://localhost:5000/coxbazar')
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
                    path: '/aboutus',
                    element: <AboutUs></AboutUs>
                }
            ]
        }
    ])