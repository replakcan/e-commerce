/* eslint-disable no-unused-vars */
import axiosInstance from '@/services/axiosInstance'

export const SET_CART = 'SET_CART'
export const SET_PAYMENT = 'SET_PAYMENT'
export const SET_ADDRESS = 'SET_ADDRESS'
export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const TOGGLE_CHECKED = 'TOGGLE_CHECKED'
export const SET_PREV_ORDERS = 'SET_PREV_ORDERS'

export const setCart = (product) => ({
  type: SET_CART,
  payload: product,
})

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
})

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
})

export const incrementCount = (productId) => ({
  type: INCREMENT_COUNT,
  payload: productId,
})

export const decrementCount = (productId) => ({
  type: DECREMENT_COUNT,
  payload: productId,
})

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
})

export const toggleChecked = (productId) => ({
  type: TOGGLE_CHECKED,
  payload: productId,
})

export const setPrevOrders = (prevORders) => ({
  type: SET_PREV_ORDERS,
  payload: prevORders,
})

export const createOrder = (data, token) => {
  return async (dispatch, getState) => {
    await axiosInstance
      .post('/order', data, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {})
      .catch((error) => {
        console.error(error)
      })
  }
}

export const fetchPreviousOrders = (token) => {
  return async (dispatch, getState) => {
    await axiosInstance('/order', {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        dispatch(setPrevOrders(res.data))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
