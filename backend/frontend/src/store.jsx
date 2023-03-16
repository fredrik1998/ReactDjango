import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { productListReducer, productDetailsReducer, productTopRatedReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewReducer, productImageUploadReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer, userProfileReducer, userUpdateReducer, userListReducer, userDeleteReducer} from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPaymentReducer, orderListReducer} from './reducers/orderReducers';


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReview: productReviewReducer,
    productImageUpload: productImageUploadReducer,
    productTopRated: productTopRatedReducer,
    cart : cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPaymentReducer,
    orderList: orderListReducer,
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
