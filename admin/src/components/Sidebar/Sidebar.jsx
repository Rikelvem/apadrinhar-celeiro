import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Adicionar criança</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Lista de crianças</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                    <img src={assets.basket_icon} alt="" className='gift'/>
                    <p>Crianças apadrinhadas</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
