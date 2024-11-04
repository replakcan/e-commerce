import OrderSumm from "@/components/OrderSummary";
import AddAddressForm from "@/layouts/AddressForm";
import AddresList from "@/layouts/AddressList";
import { fetchAddressList } from "@/redux/actions/clientActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const userToken = useSelector((store) => store.client.user.token);
    /* const addressList = useSelector((store) => store.client.addressList) */

    useEffect(() => {
        dispatch(fetchAddressList(userToken));
    }, [dispatch, userToken]);

    // Callback to fetch the address list after adding an address
    const refreshAddressList = () => {
        dispatch(fetchAddressList(userToken));
    };
    //TODO adreslere hover ekle
    return (
        <section className="flex flex-col md:flex-row gap-2 justify-between py-4">
                <AddresList />
                <AddAddressForm onAddressAdded={refreshAddressList} />
            <OrderSumm />
        </section>
    );
};
export default CreateOrderPage;
