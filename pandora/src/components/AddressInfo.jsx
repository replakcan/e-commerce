import { useDispatch, useSelector } from "react-redux";
import Heading from "./ui/heading";
import { Trash } from "lucide-react";
import { deleteAddress, fetchAddressList } from "@/redux/actions/clientActions";
import { useState } from "react";
import { Button } from "./ui/button";
import AddressUpdateForm from "@/layouts/AddressUpdateForm";

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
        <div className="border border-black flex justify-between p-2 min-w-[300px]">
            {isEditing ? (
                <AddressUpdateForm
                    id={id}
                    addressData={{ title, name, surname, phone, city, district, neighborhood, address }}
                    onClose={handleCloseEditForm}
                />
            ) : (
                <div className="flex flex-col flex-wrap" onClick={onClick}>
                    <Heading variant="h2">{title}</Heading>
                    <Heading variant="h4">{name} {surname}</Heading>
                    <p><span className="text-danger font-bold">phone:</span> {phone}</p>
                    <p><span className="text-danger font-bold">city:</span> {city}</p>
                    <p><span className="text-danger font-bold">district:</span> {district}</p>
                    <p><span className="text-danger font-bold">neighborhood:</span> {neighborhood}</p>
                    <p className="max-w-[200px]"><span className="text-danger font-bold">address:</span> {address}</p>
                </div>
            )}
            <div className="flex flex-col justify-between items-end">
                {!isEditing && (
                    <Button onClick={handleEditClick} variant="outline">Adresi Duzenle</Button>
                )}
                {!isEditing && <Button onClick={deleteAddressInfo} variant="destructive" size="iconsqr">
                    <Trash />
                </Button>}
            </div>
        </div>
    );
};

export default AddressInfo;
