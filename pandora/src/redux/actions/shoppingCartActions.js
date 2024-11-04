export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";


export const setCart = (product) => ({
    type: SET_CART,
    payload: product,
});

export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment,
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address,
});

export const incrementCount = (productId) => ({
    type: INCREMENT_COUNT,
    payload: productId,
});

export const decrementCount = (productId) => ({
    type: DECREMENT_COUNT,
    payload: productId,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const toggleChecked = (productId) => ({
    type: TOGGLE_CHECKED,
    payload: productId,
});

/* export const fetchAddressList = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("token:", token);
    return async (dispatch, getState) => {
        await axiosInstance("/user/address", {
            headers: {
                Authorization: token,
            }
        }).then((res) => {
            console.log("resbircime:", res);
            dispatch({
                type: SET_ADDRESS,
                payload: res.data,
            });

        }).catch((error) => {
            console.log("Error:", error);
        });
    };
}; */
