/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash } from "lucide-react";
import { deleteAddress, fetchAddressList } from "@/redux/actions/clientActions";
import AddressUpdateForm from "@/layouts/AddressUpdateForm";
import { Button } from "./ui/button";
import Heading from "./ui/heading";

const AddressInfo = ({ title, name, surname, phone, city, district, neighborhood, address, id, onClick }) => {
    const dispatch = useDispatch();
    const userToken = useSelector((store) => store.client.user.token);
    const [isEditing, setIsEditing] = useState(false);

    const deleteAddressInfo = () => {
        dispatch(deleteAddress(id, userToken));
        dispatch(fetchAddressList(userToken))
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEditForm = () => {
        setIsEditing(false);
    };

    return (
        <div className="border flex justify-between p-2 w-full cursor-pointer p-4 hover:bg-gray-100 hover:shadow-md transition-all duration-200 rounded-lg">
            {isEditing ? (
                <AddressUpdateForm
                    id={id}
                    addressData={{ title, name, surname, phone, city, district, neighborhood, address }}
                    onClose={handleCloseEditForm}
                />
            ) : (
                <div
                    className="addressInfo flex flex-col flex-wrap "
                    onClick={onClick}
                >
                    <Heading variant="h2">{title}</Heading>
                    <Heading variant="h4">{name} {surname}</Heading>
                    <p><span className="text-danger font-bold">Phone:</span> {phone}</p>
                    <p><span className="text-danger font-bold">City:</span> {city}</p>
                    <p><span className="text-danger font-bold">District:</span> {district}</p>
                    <p><span className="text-danger font-bold">Neighborhood:</span> {neighborhood}</p>
                    <p className="max-w-[200px]"><span className="text-danger font-bold">Address:</span> {address}</p>
                </div>
            )}
            <div className="flex flex-col justify-between items-end">
                {!isEditing && (
                    <Button onClick={handleEditClick} variant="outline">Edit Address</Button>
                )}
                {!isEditing && <Button onClick={deleteAddressInfo} variant="destructive" size="iconsqr">
                    <Trash />
                </Button>}
            </div>
        </div>
    );
};

export default AddressInfo;
