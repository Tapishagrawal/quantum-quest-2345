import { useContext, useState } from 'react'
import './App.css'
import { SideMenu } from './components/SideMenu'
import { Main } from './pages/Main'
import { Login } from './pages/Login';
import { LoginPageContext } from './context/LoginPageContextProvider';
import { Register } from './pages/Register';

function App() {
  const { isLoginPageVisibaleVisible, isRegisterPageVisibaleVisible } = useContext(LoginPageContext);

  return (
    <>
      <div className='p-3 flex gap-8 justify-between transition-all'>
        <SideMenu/>
        <Main/>
        {isLoginPageVisibaleVisible && <Login />}
        {isRegisterPageVisibaleVisible && <Register />}
      </div>
    </>
  )
}

export default App
