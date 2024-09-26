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
                        <li className='sidebar__nav__element'><a className="sidebar-link" href="/">Home</a></li>
                        <hr />
                        <li className='sidebar__nav__element'><a className="sidebar-link__border" href="/dashboard">Dashboard</a></li>
                        <hr />
                        <li className='sidebar__nav__element'><a className="sidebar-link" href="/training">Training</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
