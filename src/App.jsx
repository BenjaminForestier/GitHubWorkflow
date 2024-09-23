import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Template from './components/Template'
import Home from './pages/Home'
import Training from './pages/Training'
import './assets/style/main.scss'
import { AuthProvider } from './utils/AuthProvider'
import Register from './pages/Register'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'training',
        element: <Training />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  }
])

export default function App() {
  return (

  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  )
}