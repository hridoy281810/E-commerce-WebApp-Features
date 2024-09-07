import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './provider/authProvider.jsx'
import { CartProvider } from './provider/cartProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <CartProvider>

  <RouterProvider router={router} />
  <ToastContainer />
      </CartProvider>
     </AuthProvider>
  </StrictMode>,
)
