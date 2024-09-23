import React from 'react'
import './Sidebar.scss'
import logo from '../../assets/images/basic_fat_logo.svg'

export default function Sidebar() {
    return (
        <>
            <div className='sidebar__container'>
                <img className='sidebar__logo' src={logo} alt="Logo Basic Fat" />
                <nav className='sidebar__nav'>
                    <ul>
                        <li className='sidebar__nav__element'><a href="/">Home</a></li>
                        <li className='sidebar__nav__element'><a href="/dashboard">Dashboard</a></li>
                        <li className='sidebar__nav__element'><a href="/training">Training</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
