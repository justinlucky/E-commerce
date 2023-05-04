import React from 'react'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import About from './pages/about/about'
import Cart from './pages/Cart/cart'
import Contact from './pages/contact/contact'
import CopyRight from './pages/copyright/copyright'
import Products from './pages/products/products'
import Services from './pages/services/services'
import Login from './Shared/Login/login'
import Help from './Shared/Help/help'
import Signup from './Shared/Signup/signup'
import BuyerSignUp from './Shared/Signup/buyerSignUp'
import SellerSignUp from './Shared/Signup/sellerSignUp';
import RecentActivities from './pages/acivities/activity'
import Terms from './pages/terms/terms'
import './App.css';
import Booking from './Shared/Booking/booking';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/cart' Component={Cart} />
          <Route path='/contact' Component={Contact} />
          <Route path='/copyright' Component={CopyRight} />
          <Route path='/products' Component={Products} />
          <Route path='/services' Component={Services} />
          <Route path='/signin' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/sellers/signup' Component={SellerSignUp}/>
          <Route path='/buyers/signup' Component={BuyerSignUp}/>
          <Route path='/recent-activities' Component={RecentActivities}/>
          <Route path='/terms-and-conditions' Component={Terms}/>
          <Route path='/booking-appointment' Component={Booking}/>
          <Route path='/help-form' Component={Help}/>
        </Routes>
      </Router>
    </>
  );
}

export default App

