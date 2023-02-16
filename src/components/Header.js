import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/wood-cabin.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='navBaar'>
            <div>
                <img src={logo} alt="logo" width={"40px"}/>
                <span>Rental Hub</span>
            </div>
            <div>
                <span><NavLink active="" to={'./'} >Rent</NavLink></span>
                <span><NavLink active="" to={'./favorite'}>Favorite</NavLink></span>
                <span>Sell</span>
            </div>
        </div>
      <div className='login'>
        <span>Login</span>
        <span>Sign up</span>
      </div>
    </div>
  )
}

export default Header
