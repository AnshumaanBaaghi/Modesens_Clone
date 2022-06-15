import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes