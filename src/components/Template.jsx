import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import './Template.scss'

export default function Template() {
    return (
        <>
            <div className='app-orientation'>
                <Sidebar />
                <div className='app_body'>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    )
}