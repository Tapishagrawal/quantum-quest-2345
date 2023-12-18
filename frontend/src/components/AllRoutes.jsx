import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { Categories } from '../pages/Categories'
import { Library } from '../pages/Library'
import { Bag } from '../pages/Bag'
import { Login } from '../pages/Login'
import { Admin } from '../pages/Admin'
import { AddGame } from '../pages/AddGame'
import { Edit } from '../pages/Edit'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/library' element={<Library />} />
            <Route path='/bag' element={<Bag />} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/addgame' element={<AddGame/>} />
            <Route path='/editgame/:id' element={<Edit/>} />
            <Route path='/user' element={<Admin/>} />
        </Routes>
    )
}
