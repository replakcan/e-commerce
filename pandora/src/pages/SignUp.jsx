import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          className={`mt-1 block w-full p-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
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
          className={`mt-1 block w-full p-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={`mt-1 block w-full p-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md`}
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
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      {/* Role Selection */}
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Role
        </label>
        <select
          id="role"
          className={`mt-1 block w-full p-2 border ${
            errors.role ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          {...register("role", { required: "Role is required" })}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="store">Store</option>
          <option value="customer">Customer</option>
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
              className={`mt-1 block w-full p-2 border ${
                errors.storeName ? "border-red-500" : "border-gray-300"
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
              className={`mt-1 block w-full p-2 border ${
                errors.storePhone ? "border-red-500" : "border-gray-300"
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
              className={`mt-1 block w-full p-2 border ${
                errors.storeTaxId ? "border-red-500" : "border-gray-300"
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
              className={`mt-1 block w-full p-2 border ${
                errors.storeBankAccount ? "border-red-500" : "border-gray-300"
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

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUp;
