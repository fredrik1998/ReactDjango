import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppPage from './AppPage'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<AppPage/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path ='/cart/:id?' element={<CartScreen/>}/>
      <Route path ='/login' element={<LoginScreen/>}/>
      <Route path ='/register' element={<RegisterScreen/>}/>
      <Route path ='/profile' element={<ProfileScreen/>}/>
    </Routes>
  )
}

export default App