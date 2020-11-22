import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from "../../layout/Container/Container"
import logo from '../../images/logo.png'

import './Header.scss'

const Header = () => (
    <header className='header'>
        <Container style={{display: 'flex'}}>
            <div className='header-logo'>
                <NavLink className='header-logo_link' to='/'>
                    <img className='header-logo_img' src={logo} alt="Logo"/>
                </NavLink>
            </div>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-list_item'>
                        <NavLink className='nav-list_link' activeClassName='nav-list_link-active' to='/movies'>Фильмы</NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    </header>
)

export default Header