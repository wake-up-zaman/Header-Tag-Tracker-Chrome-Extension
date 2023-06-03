import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Products'
import About from './components/About'
import './tabs.css'
import { Link } from 'react-router-dom'
import Products from './components/Products'

function Tabs() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Products/>
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </div>
    )
}

export default Tabs;