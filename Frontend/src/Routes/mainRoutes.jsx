import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BeautyProducts from '../Components/Beauty/Beauty'
import Productdetails from '../Components/Beauty/Productdetails'
import Home from '../Components/Home'
import Login from '../Components/Login'
import ProductCart from '../Components/Non Empty Cart/ProductCart'
import Signup from '../Components/Signup'
import Navbar from "../Components/Navbar/Navbar"
import {Footer} from "../Components/Navbar/Footer"


const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/prod" element={<BeautyProducts/>}></Route>
            <Route path="/ProductPage/:id" element={<Productdetails/>}></Route>
           
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/cart' element={<ProductCart/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default MainRoutes