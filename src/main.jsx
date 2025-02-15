import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreateRouter} />
    </AuthProvider>
  </React.StrictMode>,
)
