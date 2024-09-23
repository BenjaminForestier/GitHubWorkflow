import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Template() {
    return (
        <>
            <Sidebar />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}