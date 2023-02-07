import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppPage from './AppPage'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import OrderScreen from './screens/OrderScreen'
import PaymentScreen from './screens/PaymentScreen'
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<AppPage/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path ='/cart/:id?' element={<CartScreen/>}/>
      <Route path ='/login' element={<LoginScreen/>}/>
      <Route path ='/register' element={<RegisterScreen/>}/>
      <Route path ='/profile' element={<ProfileScreen/>}/>
      <Route path ='/login/shipping' element={<ShippingScreen/>}/>
      <Route path ='/payment' element={<PaymentScreen/>}/>
      <Route path ='/placeorder' element={<OrderScreen/>}/>
    </Routes>
  )
}

export default App