import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,
    ORDER_PAYMENT_REQUEST,
    ORDER_PAYMENT_SUCCESS,
    ORDER_PAYMENT_FAIL,
    ORDER_PAYMENT_RESET
} from "../constants/orderConstants";
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";
import axios from "axios";

export const createOrder = (order) => async(dispatch, getState) => {
    try{
    dispatch({type: ORDER_CREATE_REQUEST});

    const {
        userLogin: {userInfo},
    } = getState()

    const config = {
        headers: {
            'Content-type':'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    const {data} = await axios.post(
        `/api/orders/add/`,
        order,
        config
    );

    dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data
    });

    dispatch({
        type: CART_CLEAR_ITEMS,
        payload: data
    })
    localStorage.removeItem('cartItems')

}
   catch(error){
    dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
        error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
   }
}

export const getOrderDetails = (id) => async(dispatch, getState) => {
    try{
    dispatch({type: ORDER_DETAILS_REQUEST});

    const {
        userLogin: {userInfo},
    } = getState()

    const config = {
        headers: {
            'Content-type':'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    const {data} = await axios.get(
        `/api/orders/${id}/`,
        config
    );

    dispatch({
        type: ORDER_DETAILS_SUCCESS,
        payload: data
    });
}
   catch(error){
    dispatch({
        type: ORDER_DETAILS_FAIL,
        payload:
        error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
   }
}

export const updateOrderToPaid = (id, paidAt) => async(dispatch, getState) => {
    try{
    dispatch({type: ORDER_PAYMENT_REQUEST});

    const {
        userLogin: {userInfo},
    } = getState()

    const config = {
        headers: {
            'Content-type':'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    const {data} = await axios.put(
        `/api/orders/${id}/pay/`,
        { paidAt },
        config
    );

    dispatch({
        type: ORDER_PAYMENT_SUCCESS,
        payload: data
    });

    dispatch({
        type: ORDER_UPDATE_RESET,
      });
}
   catch(error){
    dispatch({
        type: ORDER_PAYMENT_FAIL,
        payload:
        error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
   }
}

export const listMyOrders = () => async(dispatch, getState) => {
    try{
    dispatch({type: ORDER_LIST_MY_REQUEST});

    const {
        userLogin: {userInfo},
    } = getState()

    const config = {
        headers: {
            'Content-type':'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    const {data} = await axios.get(
        `/api/orders/myorders/`,
        config
    );

    dispatch({
        type: ORDER_LIST_MY_SUCCESS,
        payload: data
    });
}
   catch(error){
    dispatch({
        type: ORDER_LIST_MY_FAIL,
        payload:
        error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
   }
}



