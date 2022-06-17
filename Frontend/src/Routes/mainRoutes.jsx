import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BeautyProducts from '../Components/Beauty/Beauty'
import Productdetails from '../Components/Beauty/Productdetails'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/prod" element={<BeautyProducts/>}></Route>
            <Route path="/ProductPage/:id" element={<Productdetails/>}></Route>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes