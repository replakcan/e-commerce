export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';


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
