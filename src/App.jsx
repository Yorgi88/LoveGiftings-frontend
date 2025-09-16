import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import ProductDetails from './Components/ProductDetails';
import NavBar from './Components/NavBar';
import CartPage from './Components/CartPage';
import CheckOut from './Components/CheckOut'
import FailedPayment from './Components/FailedPayment';
import SuccessPayment from './Components/SuccessPayment';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from './features/cart/cartSlice';
import MyOrders from './Components/MyOrders';

function App() {
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
 
  return (

    <div>
      <div>
        <NavBar/>
      </div>
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/products/category/:slug' element={<ProductDetails/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
       <Route path='/orders' element={<MyOrders/>}/>
      <Route path='/payment/success/:reference' element={<SuccessPayment/>}/>
      <Route path='/payment/failed/:reference' element={<FailedPayment/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
    </Routes>

    </div>

  
  
  )
}

export default App;