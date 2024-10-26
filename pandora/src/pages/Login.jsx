import useLocalStorage from '@/hooks/useLocalStorage';
import { loginUser } from '@/redux/actions/clientActions';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Toastify from 'toastify-js'

const Login = () => {
    const user = useSelector((store) => store.client.user);
    const [token, setToken] = useLocalStorage("token", null);
    let history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const rememberMe = watch("rememberMe", false);

    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            const previousPage = location.state?.from || '/';
            history.push(previousPage);
            Toastify({
                text: `${user.name} hosgeldiniz`,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { }
            }).showToast();
        }

        if (rememberMe && user.token) {
            setToken(user.token);
        }
    }, [user, rememberMe]);

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className="mb-6 relative">
                    <label className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
                {/* Remember Me Checkbox */}
                <div className="mb-6 flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        className="mr-2"
                        {...register('rememberMe')}
                    />
                    <label htmlFor="rememberMe" className="text-gray-700 font-semibold">Remember Me</label>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
