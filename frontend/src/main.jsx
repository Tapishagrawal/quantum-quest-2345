import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginPageContextProvider from './context/LoginPageContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginPageContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginPageContextProvider>
)
