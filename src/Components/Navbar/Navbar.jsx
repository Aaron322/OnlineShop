import React, { useRef } from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import logo from '../Assets/image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleDown,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  const [menu, setMenu] = useState('Shop')
  const { getTotalQuantity } = useContext(ShopContext)
  const menuRef = useRef()
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
    // console.log(menuRef.current.classList)
    // console.log(menuRef.current)
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Store Name</p>
      </div>
      <FontAwesomeIcon
        className="nav-dropdown"
        onClick={dropdown_toggle}
        icon={faChevronCircleDown}
        size="xl"
      />
      <ul ref={menuRef} className="nav-menu">
        {/* hr bar will appear when user clicks the tag */}

        <li
          onClick={() => {
            setMenu('home')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('men')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/men">
            Men
          </Link>
          {menu === 'men' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('women')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/women">
            Women
          </Link>
          {menu === 'women' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/kids">
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button
            onClick={() => {
              localStorage.removeItem('auth-token')
              window.location.replace('/')
            }}
          >
            Logout{' '}
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <FontAwesomeIcon
            className="cart-icon"
            icon={faShoppingCart}
            color="#f40fd291;"
            fixedWidth
            size="2x"
          />
        </Link>
        <div className="nav-cart-count">{getTotalQuantity()}</div>
      </div>
    </div>
  )
}
