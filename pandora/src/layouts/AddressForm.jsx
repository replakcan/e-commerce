import { Button } from '@/components/ui/button';
import { addAddress } from '@/redux/actions/clientActions';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function AddAddressForm({ onAddressAdded }) {
    const [showForm, setShowForm] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const userToken = useSelector((store) => store.client.user.token);

    const onSubmit = async (data) => {
        const formattedData = {
            title: data.title,
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            city: data.city,
            district: data.district,
            neighborhood: data.neighborhood,
            address: data.address
        };
        try {
            dispatch(addAddress(formattedData, userToken)); // Add the address
            if (onAddressAdded) onAddressAdded(); // Refetch the address list after adding
        } catch (error) {
            console.error("Failed to add address:", error);
        }
        reset();
    };

    return (
        <div className="flex flex-col">
            <Button
                onClick={() => setShowForm(!showForm)}            >
                Add Address
            </Button>

            {showForm && (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Add Address</h2>

                    {/* Address Title Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Address Title</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register('title', { required: 'Address title is required' })}
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    {/* Name & Surname Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name & Surname</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                {...register('name', { required: 'Name is required' })}
                            />
                            <input
                                type="text"
                                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                {...register('surname', { required: 'Surname is required' })}
                            />
                        </div>
                        {(errors.name || errors.surname) && <p className="text-red-500 text-sm">{errors.name?.message || errors.surname?.message}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                        <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register('phone', { required: 'Phone number is required' })}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    {/* City Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">City (İl)</label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register('city', { required: 'City is required' })}
                        >
                            <option value="">Select City</option>
                            <option value="istanbul">Istanbul</option>
                            <option value="ankara">Ankara</option>
                            <option value="izmir">Izmir</option>
                        </select>
                        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                    </div>

                    {/* District Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">District (İlçe)</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register('district', { required: 'District is required' })}
                        />
                        {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
                    </div>

                    {/* Neighborhood Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Neighborhood (Mahalle)</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register('neighborhood', { required: 'Neighborhood is required' })}
                        />
                        {errors.neighborhood && <p className="text-red-500 text-sm">{errors.neighborhood.message}</p>}
                    </div>

                    {/* Address Field */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Address</label>
                        <textarea
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register('address', { required: 'Address details are required' })}
                        ></textarea>
                        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            )}
        </div>
    );
}

export default AddAddressForm;
