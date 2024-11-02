import { fetchAddressList } from "@/redux/actions/shoppingCartActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateOrderPage = () => {

    const dispatch = useDispatch();
    const addressList = useSelector((store) => store.shoppingCart.address);

    useEffect(() => {
        dispatch(fetchAddressList());

    }, [])

    console.log("addressList:", addressList);
    return (

        <>
            <p>SALAMANCA</p>
        </>
    )
}
export default CreateOrderPage;