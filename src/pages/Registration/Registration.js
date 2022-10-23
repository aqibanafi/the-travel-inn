import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [accepted, setAccepted] = useState(true)
    const { createAccount, verifyEmail, updateUserProfile } = useContext(AuthContext)
    const handlecreateAccount = () => {
        createAccount(email, password)
            .then(result => {
                const user = result.user;
                handleEmailVerification()
                toast.success('Please verify your email address.')
                handleUpdateUserProfile(name)
            })
            .catch(error => console.error(error))
    }

    const getName = event => {
        setName(event.target.value)
    }

    const getEmail = event => {
        setEmail(event.target.value)
    }

    const getPassword = event => {
        setPassword(event.target.value)
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }

    const handleUpdateUserProfile = name => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }
    return (
        <div className='flex justify-center mt-20 mb-20'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                </div>
                <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="name" className="block mb-2 text-sm">Full Name</label>
                            <input onBlur={getName} type="text" name="name" id="name" placeholder="full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input onBlur={getEmail} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input onBlur={getPassword} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input onClick={handleAccepted} type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                            <label for="remember" className="text-sm dark:text-gray-400">Accept Terms & Conditions</label>
                        </div>
                        <div>
                            <button onClick={handlecreateAccount} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900" disabled={!accepted}>Sign up</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Already Register?
                            <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Log In</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;