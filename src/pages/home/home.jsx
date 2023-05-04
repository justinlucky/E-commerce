import React from 'react'
import Navbar1 from '../../components/header/navbar1'
import './home.css';
import MainSection from '../../components/hero/main-section';
import Footer from '../../components/footer/footer';
import FloatingCart from '../../components/Floating-Cart/floating-cart';

const Home = () => {
  return (
    <div id='home-container'>
      <header>
        <Navbar1/>
      </header>
      <main>
        <MainSection/>
        <FloatingCart/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home
