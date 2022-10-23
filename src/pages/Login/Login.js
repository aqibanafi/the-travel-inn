import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn, setLoading} = useContext(AuthContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = () => {
        signIn(email, password)
        .then(result => {
            const user = result.user;
            if(user.emailVerified) {
                navigate(from, {replace: true});
                toast.success('Login Successful!')
            } else {
                toast.error('Your email is not verified. Please verify your email address.')
            }
        })
        .catch(error => console.error(error))
        .finally (() => setLoading(false))
    }

    const getEmail = event => {
        setEmail(event.target.value)
    }

    const getPassword = event => {
        setPassword(event.target.value)
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
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input onBlur={getEmail} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input onBlur={getPassword} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div>
                        <p>Email: ixrtmpmaqdsjlpipjy@tmmbt.com </p>
                        <p>Password: 123456 </p>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button onClick={handleSignIn} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                            <Link to='/registration' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;