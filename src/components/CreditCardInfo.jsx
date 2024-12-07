/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Trash } from "lucide-react";
import { deleteCreditCard, fetchCreditCards } from "@/redux/actions/clientActions";
import { useState } from "react";
import CreditCardUpdateForm from "@/layouts/CreditCardUpdateForm";
import { Button } from "./ui/button";

const CreditCardInfo = ({ id, card_no, expire_month, expire_year, name_on_card, onClick }) => {
    const dispatch = useDispatch();
    const userToken = useSelector((store) => store.client.user.token);
    const [isEditing, setIsEditing] = useState(false);

    const deleteCard = () => {
        dispatch(deleteCreditCard(id, userToken));
        dispatch(fetchCreditCards(userToken));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEditForm = () => {
        setIsEditing(false);
    };

    return (
        <div className="flex border justify-between p-2 w-full cursor-pointer p-4 hover:bg-gray-100 hover:shadow-md transition-all duration-200 rounded-lg">
            {isEditing ? (
                <CreditCardUpdateForm
                    id={id}
                    cardData={{ card_no, expire_month, expire_year, name_on_card }}
                    onClose={handleCloseEditForm}
                />
            ) : (
                <div onClick={onClick} className="flex flex-col flex-wrap">
                    <p><span className="text-danger font-bold">Card Number:</span> **** **** **** {card_no.slice(-4)}</p>
                    <p><span className="text-danger font-bold">Name:</span> {name_on_card}</p>
                    <p><span className="text-danger font-bold">Expiry Date:</span> {expire_month}/{expire_year}</p>
                </div>
            )}
            <div className="flex flex-col gap-4 justify-between items-end">
                {!isEditing && (
                    <Button onClick={handleEditClick} variant="outline">Edit Payment Method</Button>
                )}
                {!isEditing && (
                    <Button onClick={deleteCard} variant="destructive" size="iconsqr">
                        <Trash />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CreditCardInfo;
