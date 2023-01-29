import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppPage from './AppPage'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<AppPage/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path ='/cart/:id?' element={<CartScreen/>}/>
    </Routes>
  )
}

export default App