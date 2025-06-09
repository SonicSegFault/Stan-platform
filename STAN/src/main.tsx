import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.tsx'
import UnderConstruction from './pages/UnderConstruction.tsx'
import Programs from './pages/Programs.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/aboutus',
    element: <UnderConstruction/>
  },
  {
    path: '/program',
    element: <Programs/>
  },
  {
    path: '/membership',
    element: <UnderConstruction/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
