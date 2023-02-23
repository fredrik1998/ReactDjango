import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppPage from './AppPage';
import Loader from './components/Loader';

const CartScreen = lazy(() => import('./screens/CartScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
const OrderConformationScreen = lazy(() => import('./screens/OrderConformationScreen'));
const OrderScreen = lazy(() => import('./screens/OrderScreen'));
const PaymentScreen = lazy(() => import('./screens/PaymentScreen'));
const ProductScreen = lazy(() => import('./screens/ProductScreen'));
const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));
const RegisterScreen = lazy(() => import('./screens/RegisterScreen'));
const ShippingScreen = lazy(() => import('./screens/ShippingScreen'));
const SuccessScreen = lazy(() => import('./screens/SuccessScreen'));
const UserListScreen = lazy(() => import('./screens/UserListScreen'));
const ProductListScreen = lazy(() => import('./screens/ProductListScreen'));
const ProductEditScreen = lazy(() => import('./screens/ProductEditScreen'));

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<AppPage />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart/:id?' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/login/shipping' element={<ShippingScreen />} />
      <Route path='/payment' element={<PaymentScreen />} />
      <Route path='/placeorder' element={<OrderScreen />} />
      <Route path='/order/:orderId' element={<OrderConformationScreen />} />
      <Route path='/success' element={<SuccessScreen />} />
      <Route path='/admin/users' element={<UserListScreen />} />
      <Route path='/admin/products' element={<ProductListScreen/>}/>
      <Route path='/admin/products/:id/edit' element={<ProductEditScreen/>}/>
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Suspense fallback={<Loader/>}>
      <App />
    </Suspense>
  );
}
