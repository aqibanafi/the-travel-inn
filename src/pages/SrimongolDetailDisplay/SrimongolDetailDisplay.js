import React from 'react';
import { Link } from 'react-router-dom';

const SrimongolDetailDisplay = ({ info }) => {
    const { title, details, price, rating, image } = info;
    return (
        <div className='flex justify-center'>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 p-2">
                <div>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        {details.length > 50 ? <p className="dark:text-gray-100">{details.slice(0, 50)}</p> : <p className="dark:text-gray-100">{details}</p>}
                        <p className='mt-4 text-xl font-semibold'>Price ($): <span>{price}</span></p>
                    </div>
                    <div>
                        <Link to='/bookingform'>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SrimongolDetailDisplay;