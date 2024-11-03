import AddAddressForm from "@/layouts/AddressForm";
import AddresList from "@/layouts/AddressList";
import { fetchAddressList } from "@/redux/actions/clientActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const userToken = useSelector((store) => store.client.user.token);

    useEffect(() => {
        dispatch(fetchAddressList(userToken));
    }, [dispatch, userToken]);

    // Callback to fetch the address list after adding an address
    const refreshAddressList = () => {
        dispatch(fetchAddressList(userToken));
    };

    return (
        <div>
            <AddresList />
            <AddAddressForm onAddressAdded={refreshAddressList} />
        </div>
    );
};
export default CreateOrderPage;
