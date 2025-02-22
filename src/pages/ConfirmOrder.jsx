import OrderSumm from "@/components/OrderSummary";
import AddAddressForm from "@/layouts/AddressForm";
import AddresList from "@/layouts/AddressList";
import AddCreditCardForm from "@/layouts/CreditCardForm";
import CreditCardList from "@/layouts/CreditCardList";
import {
  fetchAddressList,
  fetchCreditCards,
} from "@/redux/actions/clientActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateOrderPage = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((store) => store.client.user.token);

  useEffect(() => {
    dispatch(fetchAddressList(userToken));
    dispatch(fetchCreditCards(userToken));
  }, [dispatch, userToken]);

  const refreshAddressList = () => {
    dispatch(fetchAddressList(userToken));
  };

  const refreshCardList = () => {
    dispatch(fetchCreditCards(userToken));
  };

  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:px-16 lg:py-12 min-h-lvh">
      <div className="w-full lg:w-2/3 space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold">Delivery Addresses</h2>
            <div>
              <AddAddressForm onAddressAdded={refreshAddressList} />
            </div>
          </div>
          <AddresList />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold">Payment Methods</h2>
            <div>
              <AddCreditCardForm onCardAdded={refreshCardList} />
            </div>
          </div>
          <CreditCardList />
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-fit bg-white shadow-lg rounded-lg p-6">
        <OrderSumm />
      </div>
    </section>
  );
};

export default CreateOrderPage;
