import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Template from './components/Template'
import Home from './pages/Home'
import Training from './pages/Training'
import './assets/style/main.scss'

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
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}