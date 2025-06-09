import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.tsx'
import Login from "./pages/Login.tsx"
import DashBoard from './pages/DashBoard.tsx'
import UploadFile from './pages/UploadFile.tsx'

//context
import { AuthContextProvider } from './context/AuthContext.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/dashboard",
    element: <DashBoard />
  },
  {
    path:"/upload",
    element: <UploadFile />
  }

])

createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
      <RouterProvider router={router} />
  </AuthContextProvider>
)
