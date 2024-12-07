import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (

      <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]'>

          <ToastContainer />
        
          <Navbar />

          <SearchBar />
        
          <Routes>

            <Route path='/' element = {<Home/>} />
            <Route path='/collection' element = {<Collection/>} />
            <Route path='/orders' element = {<Orders/>} />
            <Route path='/place-order' element = {<PlaceOrder/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/product/:productId' element = {<Product/>} />

          </Routes>

          <Footer />
  
      </div>

  )

}

export default App