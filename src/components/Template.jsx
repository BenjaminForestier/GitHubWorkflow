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
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    )
}