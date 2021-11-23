import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <NavLink to='/' exact className='navbar-brand' activeClassName={"activeLink"} >Normasoft</NavLink>
            <NavLink to='/add' className='navbar-brand' activeClassName={"activeLink"} >Add card</NavLink>
        </nav>
    )
}
