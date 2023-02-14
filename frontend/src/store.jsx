import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { productListReducer, productDetailsReducer, productTopRatedReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer, userProfileReducer, userUpdateReducer,} from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer,  } from './reducers/orderReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productTopRated: productTopRatedReducer,
    cart : cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? 
 JSON.parse(localStorage.getItem('cartItems')) : []

 const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? 
 JSON.parse(localStorage.getItem('userInfo')) : null

 const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ? 
 JSON.parse(localStorage.getItem('userInfo')) : {}

const initialState = {
    cart: {cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage},
    userLogin: {userInfo: userInfoFromLocalStorage}   
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store