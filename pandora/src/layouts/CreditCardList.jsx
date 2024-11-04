import CreditCardInfo from "@/components/CreditCardInfo";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { setPayment } from "@/redux/actions/shoppingCartActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreditCardList = () => {
    const [showInfo, setShowInfo] = useState(false);
    const creditCardList = useSelector((store) => store.client.creditCards);
    const cartPayment = useSelector((store) => store.shoppingCart.payment)

    const dispatch = useDispatch();

    const chooseCreditCard = (card) => {
        dispatch(setPayment(card));
        console.log("cartPayment:", cartPayment)
    };

    console.log("cartPayment:",cartPayment)

    return (
        <div className="">
            <Button onClick={() => setShowInfo(!showInfo)}>Show Kayıtlı Kartlar</Button>

            {showInfo && creditCardList.length === 0 && (
                <Heading variant="h1">Kayıtlı kart bulunamadı.</Heading>
            )}

            <div className="flex flex-wrap gap-1">
                {showInfo && creditCardList?.map((card) => {
                    return (
                        <CreditCardInfo
                            onClick={() => chooseCreditCard(card)}
                            key={card.id}
                            card_no={card.card_no}
                            expire_month={card.expire_month}
                            expire_year={card.expire_year}
                            name_on_card={card.name_on_card}
                            id={card.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CreditCardList;
