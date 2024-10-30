import { SET_ADDRESS, SET_CART, SET_PAYMENT } from "../actions/shoppingCartActions";

const initialState = {
    cart: [],
    payment: {},
    address: {},
};


export default function ShoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            const existingProductIndex = state.cart.findIndex(
                (item) => item.product.id === action.payload.id
            );

            if (existingProductIndex >= 0) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    count: updatedCart[existingProductIndex].count + 1,
                };
                return { ...state, cart: updatedCart };
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    { count: 1, checked: true, product: action.payload },
                ],
            };
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload,
            };
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        default:
            return state;
    }
}
