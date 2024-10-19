import React from 'react'
import './Sidebar.scss'
import logo from '../../assets/images/basic_fat_logo.svg'
import { useAuth } from '../../utils/AuthProvider'
export default function Sidebar() {
    const { currentUser, logout } = useAuth();
    function disconnect() {
        logout();
        window.location.href = "/login";
        
    }
    return (
        <>
            <div className='sidebar__container'>
                <img className='sidebar__logo' src={logo} alt="Logo Basic Fat" />
                <nav className='sidebar__nav'>
                    <ul>
                        <li className='sidebar__nav__element'><a className="sidebar-link" href="/">Home</a></li>
                        {/* <hr /> */}
                        <li className='sidebar__nav__element'><a className="sidebar-link" href="/dashboard">Dashboard</a></li>
                        {/* <hr /> */}
                        <li className='sidebar__nav__element'><a className="sidebar-link" href="/training">Training</a></li>
                        <li className='sidebar__nav__element'><a className="sidebar-link" onClick={
                            () => disconnect()
                        }>Déconnexion</a></li>


                    </ul>
                </nav>
            </div>
        </>
    )
}
