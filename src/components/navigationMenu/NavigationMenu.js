import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <nav className="navbar">

      <NavLink className="nav-item"
        to="/orders" activeClassName="nav-item--active">Orders</NavLink>

      <NavLink className="nav-item"
        to="/products" activeClassName="nav-item--active">Products</NavLink>

    </nav>
  )
}

export default NavigationMenu
