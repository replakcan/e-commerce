import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const role = watch("role");

    const onSubmit = (data) => {
        let formattedData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role === "admin" ? 1 : data.role === "store" ? 2 : 3,
        };

        if (data.role === "store") {
            formattedData.store = {
                name: data.storeName,
                phone: data.storePhone,
                tax_no: data.storeTaxId,
                bank_account: data.storeBankAccount,
            };
        }

        console.log(formattedData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="my-12 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg"
        >
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

            {/* Name Input */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    id="name"
                    className={`mt-1 block w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                        } rounded-md`}
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters",
                        },
                    })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Input */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className={`mt-1 block w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md`}
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Input with Eye Icon */}
            <div className="mb-4 relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="flex items-center">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"} // Toggles between text and password
                        className={`mt-1 block w-full p-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                            } rounded-md pr-10`} // Right padding for icon space
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            validate: (value) =>
                                /[A-Z]/.test(value) &&
                                /[a-z]/.test(value) &&
                                /[0-9]/.test(value) &&
                                /[!@#$%^&*]/.test(value) ||
                                "Password must include uppercase, lowercase, number, and special character",
                        })}
                    />
                    <span
                        className="inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 3C6.673 3 3.724 5.387 2 9c1.724 3.613 4.673 6 8 6s6.276-2.387 8-6c-1.724-3.613-4.673-6-8-6zm0 10a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3c-3.636 0-6.719 2.7-8 6 1.281 3.3 4.364 6 8 6 3.636 0 6.719-2.7 8-6-1.281-3.3-4.364-6-8-6zm0 10a4 4 0 110-8 4 4 0 010 8zM3.929 4.929a1 1 0 10-1.415 1.415l12 12a1 1 0 101.415-1.415l-12-12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </span>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Role Selection */}
            <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                </label>
                <select
                    id="role"
                    className={`mt-1 block w-full p-2 border ${errors.role ? "border-red-500" : "border-gray-300"
                        } rounded-md`}
                    {...register("role", { required: "Role is required" })}
                >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="store">Store</option>
                    <option selected="selected" value="customer">Customer</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
            </div>

            {/* Conditional Store Fields */}
            {role === "store" && (
                <>
                    {/* Store Name Input */}
                    <div className="mb-4">
                        <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
                            Store Name
                        </label>
                        <input
                            id="storeName"
                            className={`mt-1 block w-full p-2 border ${errors.storeName ? "border-red-500" : "border-gray-300"
                                } rounded-md`}
                            {...register("storeName", {
                                required: "Store Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Store Name must be at least 3 characters",
                                },
                            })}
                        />
                        {errors.storeName && (
                            <p className="text-red-500 text-sm">{errors.storeName.message}</p>
                        )}
                    </div>

                    {/* Store Phone Input */}
                    <div className="mb-4">
                        <label htmlFor="storePhone" className="block text-sm font-medium text-gray-700">
                            Store Phone
                        </label>
                        <input
                            id="storePhone"
                            type="tel"
                            className={`mt-1 block w-full p-2 border ${errors.storePhone ? "border-red-500" : "border-gray-300"
                                } rounded-md`}
                            {...register("storePhone", {
                                required: "Store Phone is required",
                                pattern: {
                                    value: /^(\+90|0)?5\d{9}$/,
                                    message: "Invalid Türkiye phone number",
                                },
                            })}
                        />
                        {errors.storePhone && (
                            <p className="text-red-500 text-sm">{errors.storePhone.message}</p>
                        )}
                    </div>

                    {/* Store Tax ID Input */}
                    <div className="mb-4">
                        <label htmlFor="storeTaxId" className="block text-sm font-medium text-gray-700">
                            Store Tax ID
                        </label>
                        <input
                            id="storeTaxId"
                            className={`mt-1 block w-full p-2 border ${errors.storeTaxId ? "border-red-500" : "border-gray-300"
                                } rounded-md`}
                            {...register("storeTaxId", {
                                required: "Store Tax ID is required",
                                pattern: {
                                    value: /^T\d{4}V\d{6}$/,
                                    message:
                                        "Tax ID should follow the pattern TXXXXVXXXXXX where X is a number",
                                },
                            })}
                        />
                        {errors.storeTaxId && (
                            <p className="text-red-500 text-sm">{errors.storeTaxId.message}</p>
                        )}
                    </div>

                    {/* Store Bank Account Input */}
                    <div className="mb-4">
                        <label htmlFor="storeBankAccount" className="block text-sm font-medium text-gray-700">
                            Store Bank Account
                        </label>
                        <input
                            id="storeBankAccount"
                            className={`mt-1 block w-full p-2 border ${errors.storeBankAccount ? "border-red-500" : "border-gray-300"
                                } rounded-md`}
                            {...register("storeBankAccount", {
                                required: "Store Bank Account is required",
                                pattern: {
                                    value: /^[A-Z]{2}[0-9]{2}[A-Z0-9]{16,30}$/,
                                    message: "Invalid IBAN",
                                },
                            })}
                        />
                        {errors.storeBankAccount && (
                            <p className="text-red-500 text-sm">{errors.storeBankAccount.message}</p>
                        )}
                    </div>
                </>
            )}

            <Button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
                Submit
            </Button>
        </form>
    );
};

export default SignUp;
