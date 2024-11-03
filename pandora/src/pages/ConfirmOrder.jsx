import { fetchAddressList } from "@/redux/actions/clientActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const userToken = useSelector((store) => store.client.user.token)

    useEffect(() => {
        dispatch(fetchAddressList(userToken));
    }, [])

    return (

        <>
            <p>SALAMANCA</p>
            
        </>
    )
}
export default CreateOrderPage;