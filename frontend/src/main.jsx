import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginPageContextProvider from './context/LoginPageContextProvider.jsx'
import ToggleMenuContextProvider from './context/ToggleMenuContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginPageContextProvider>
    <ToggleMenuContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleMenuContextProvider>
  </LoginPageContextProvider>
)
