import { useDispatch, useSelector } from "react-redux";
import Heading from "./ui/heading";
import { Trash } from "lucide-react";
import { deleteCreditCard, fetchCreditCards } from "@/redux/actions/clientActions";
import { useState } from "react";
import CreditCardUpdateForm from "@/layouts/CreditCardUpdateForm";
import { Button } from "./ui/button";

const CreditCardInfo = ({ id, card_no, expire_month, expire_year, name_on_card }) => {
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
        <div className="border border-black flex justify-between p-2 min-w-[300px]">
            {isEditing ? (
                <CreditCardUpdateForm
                    id={id}
                    cardData={{ card_no, expire_month, expire_year, name_on_card }}
                    onClose={handleCloseEditForm}
                />
            ) : (
                <div className="flex flex-col flex-wrap">
                    <Heading variant="h2">Kart Bilgileri</Heading>
                    <p><span className="text-danger font-bold">Kart Numarası:</span> **** **** **** {card_no.slice(-4)}</p>
                    <p><span className="text-danger font-bold">Kart Üzerindeki İsim:</span> {name_on_card}</p>
                    <p><span className="text-danger font-bold">Son Kullanma Tarihi:</span> {expire_month}/{expire_year}</p>
                </div>
            )}
            <div className="flex flex-col justify-between items-end">
                {!isEditing && (
                    <Button onClick={handleEditClick} variant="outline">Kartı Düzenle</Button>
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
