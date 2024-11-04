import OrderSumm from "@/components/OrderSummary";
import AddAddressForm from "@/layouts/AddressForm";
import AddresList from "@/layouts/AddressList";
import AddCreditCardForm from "@/layouts/CreditCardForm";
import CreditCardList from "@/layouts/CreditCardList";
import { fetchAddressList, fetchCreditCards } from "@/redux/actions/clientActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const userToken = useSelector((store) => store.client.user.token);

    useEffect(() => {
        dispatch(fetchAddressList(userToken));
        dispatch(fetchCreditCards(userToken))
    }, [dispatch, userToken]);

    // Callback to fetch the address list after adding an address
    const refreshAddressList = () => {
        dispatch(fetchAddressList(userToken));
    };

    const refreshCardList = () => {
        dispatch(fetchCreditCards(userToken));
    };
    //TODO adreslere hover ekle
    return (
        <section className="flex flex-col md:flex-row gap-2 justify-between py-4">
            <div>
                <div>
                    <AddresList />
                    <AddAddressForm onAddressAdded={refreshAddressList} />
                </div>
                <div>
                    <CreditCardList />
                    <AddCreditCardForm onCardAdded={refreshCardList}/>
                </div>
            </div>
            <OrderSumm />
        </section>
    );
};
export default CreateOrderPage;
