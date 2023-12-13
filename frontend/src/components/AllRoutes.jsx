import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { Categories } from '../pages/Categories'
import { Library } from '../pages/Library'
import { Bag } from '../pages/Bag'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/library' element={<Library/>}/>
            <Route path='/bag' element={<Bag/>}/>
        </Routes>
    )
}
