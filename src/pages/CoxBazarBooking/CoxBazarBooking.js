import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../assets/images/background-image.jpg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CoxBazarBooking = () => {
    const [startFromDate, setStartFromDate] = useState(new Date());
    const [startToDate, setStartToDate] = useState(new Date());

    return (
        <div className="relative">
            <img
                src={Hero}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className='w-4/6'>
                            <h1 className='text-5xl text-white font-bold mb-12'>Book Our Best Service Today!</h1>
                            <p className='text-white w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perspiciatis magnam commodi quos quaerat sit! Nobis, quaerat. Inventore, aperiam qui!</p>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className='flex justify-center mt-20 mb-20'>
                                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                                    <div className="mb-8 text-center">
                                        <h1 className="my-3 text-4xl font-bold">Book Today</h1>
                                        <p className="text-sm dark:text-gray-400">Book Resort to get fast service</p>
                                    </div>
                                    <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                                        <div className="space-y-4">
                                            <div>
                                                <label for="email" className="block mb-2 text-sm">Origin</label>
                                                <input type="text" name="origin" id="email" placeholder="Dhaka" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-2">
                                                    <label for="destination" className="text-sm">Destination</label>
                                                </div>
                                                <input type="text" name="password" id="destination" placeholder="Cox-Bazar" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                            </div>
                                            <div className='flex gap-2'>
                                                <div className="flex items-center mb-2 gap-3">
                                                    <label for="destination" className="text-sm">From</label>
                                                    <DatePicker className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" selected={startFromDate} onChange={(date) => setStartFromDate(date)} />
                                                </div>
                                                <div className="flex items-center mb-2 gap-3">
                                                    <label for="destination" className="text-sm">To</label>
                                                    <DatePicker className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" selected={startToDate} onChange={(date) => setStartToDate(date)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div>
                                                <Link to='/coxbazar'>
                                                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Book Now</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // ------------------------
    );
};

export default CoxBazarBooking;