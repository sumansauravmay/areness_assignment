import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default Allroutes
