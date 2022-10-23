import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SrimongolDetailDisplay from '../SrimongolDetailDisplay/SrimongolDetailDisplay';
import Hero from '../../assets/images/background-image.jpg'

const Srimongol = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="relative">
                <img
                    src={Hero}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="w-full">
                        <h1 className='text-4xl text-white font-bold text-center mb-12'>Stay in Cox's Bazar</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container mx-auto'>
                            {
                                data.map(detail => <SrimongolDetailDisplay key={detail.id} info={detail}></SrimongolDetailDisplay>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Srimongol;