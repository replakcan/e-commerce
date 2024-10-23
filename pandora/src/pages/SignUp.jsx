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
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Input */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
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
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* Role Selection */}
      <div>
        <label htmlFor="role">Role</label>
        <select id="role" {...register("role", { required: "Role is required" })}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="store">Store</option>
          <option value="customer">Customer</option>
        </select>
        {errors.role && <p>{errors.role.message}</p>}
      </div>

      {/* Conditional Store Fields */}
      {role === "store" && (
        <>
          {/* Store Name Input */}
          <div>
            <label htmlFor="storeName">Store Name</label>
            <input
              id="storeName"
              {...register("storeName", {
                required: "Store Name is required",
                minLength: {
                  value: 3,
                  message: "Store Name must be at least 3 characters",
                },
              })}
            />
            {errors.storeName && <p>{errors.storeName.message}</p>}
          </div>

          {/* Store Phone Input */}
          <div>
            <label htmlFor="storePhone">Store Phone</label>
            <input
              id="storePhone"
              type="tel"
              {...register("storePhone", {
                required: "Store Phone is required",
                pattern: {
                  value: /^(\+90|0)?5\d{9}$/,
                  message: "Invalid Türkiye phone number",
                },
              })}
            />
            {errors.storePhone && <p>{errors.storePhone.message}</p>}
          </div>

          {/* Store Tax ID Input */}
          <div>
            <label htmlFor="storeTaxId">Store Tax ID</label>
            <input
              id="storeTaxId"
              {...register("storeTaxId", {
                required: "Store Tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message:
                    "Tax ID should follow the pattern TXXXXVXXXXXX where X is a number",
                },
              })}
            />
            {errors.storeTaxId && <p>{errors.storeTaxId.message}</p>}
          </div>

          {/* Store Bank Account Input */}
          <div>
            <label htmlFor="storeBankAccount">Store Bank Account</label>
            <input
              id="storeBankAccount"
              {...register("storeBankAccount", {
                required: "Store Bank Account is required",
                pattern: {
                  value: /^[A-Z]{2}[0-9]{2}[A-Z0-9]{16,30}$/,
                  message: "Invalid IBAN",
                },
              })}
            />
            {errors.storeBankAccount && <p>{errors.storeBankAccount.message}</p>}
          </div>
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
