/* eslint-disable no-case-declarations */
import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  REMOVE_FROM_CART,
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
  SET_PREV_ORDERS,
  TOGGLE_CHECKED,
} from '../actions/shoppingCartActions'

const initialState = {
  cart: [],
  payment: {},
  address: {},
  prevOrders: [],
}

export default function ShoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      const existingProductIndex = state.cart.findIndex((item) => item.product.id === action.payload.id)

      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart]
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + 1,
        }
        return { ...state, cart: updatedCart }
      }

      return {
        ...state,
        cart: [...state.cart, { count: 1, checked: true, product: action.payload }],
      }
    case INCREMENT_COUNT: {
      const existingProductIndex = state.cart.findIndex((item) => item.product.id === action.payload)

      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart]
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + 1,
        }
        return { ...state, cart: updatedCart }
      }
      return state
    }

    case DECREMENT_COUNT: {
      const existingProductIndex = state.cart.findIndex((item) => item.product.id === action.payload)

      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart]
        const newCount = updatedCart[existingProductIndex].count - 1

        if (newCount > 0) {
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            count: newCount,
          }
        } else {
          updatedCart.splice(existingProductIndex, 1)
        }

        return { ...state, cart: updatedCart }
      }
      return state
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      }
    }

    case TOGGLE_CHECKED: {
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload ? { ...item, checked: !item.checked } : item
      )
      return { ...state, cart: updatedCart }
    }

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      }
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      }
    case SET_PREV_ORDERS:
      return {
        ...state,
        prevOrders: action.payload,
      }
    default:
      return state
  }
}
