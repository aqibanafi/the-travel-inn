import React from 'react';
import './Home.css'
import Coxbazar from '../../assets/images/cox-bazar.jpg'
import Bandorban from '../../assets/images/bandorban.jpg'
import Srimongal from '../../assets/images/srimongol.jpg'
import Hero from '../../assets/images/background-image.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
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
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                The quick, brown fox <br className="hidden md:block" />
                                jumps over a{' '}
                                <span className="text-teal-accent-400">lazy dog</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                quae.
                            </p>
                            <div className='flex gap-3'>
                                <Link
                                    to='/login'
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                >
                                    <button className="btn btn-outline btn-warning">Sign In</button>
                                </Link>

                                <Link
                                    to='/registration'
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                >
                                    <button className="btn btn-outline btn-warning">Sign Up</button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="flex flex-col gap-6">
                                <Link to='/coxbazarbooking'>
                                    <div className='relative shadow-xl hover:scale-110 duration-200 ease-in-out'>
                                        <img className='rounded-2xl' src={Coxbazar} alt="" />
                                        <h2 className='absolute bottom-5 left-5 text-white text-3xl font-bold'>Cox Bazar</h2>
                                    </div>
                                </Link>
                                <Link to='/bandarbonbooking'>
                                    <div className='relative shadow-xl hover:scale-110 duration-200 ease-in-out'>
                                        <img className='rounded-2xl' src={Bandorban} alt="" />
                                        <h2 className='absolute bottom-5 left-5 text-white text-3xl font-bold'>Bandarban</h2>
                                    </div>
                                </Link>
                                <Link to='/srimangalbooking'>
                                    <div className='relative shadow-xl hover:scale-110 duration-300 ease-in-out'>
                                        <img className='rounded-2xl' src={Srimongal} alt="" />
                                        <h2 className='absolute bottom-5 left-5 text-white text-3xl font-bold'>Srimangal</h2>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;