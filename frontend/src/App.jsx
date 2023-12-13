import { useState } from 'react'
import './App.css'
import { SideMenu } from './components/SideMenu'
import { Main } from './pages/Main'

function App() {
  const [toggleMenu, setToggleMenu] = useState(true)

  const handleToggleMenu = () =>{
    setToggleMenu(prev=>!prev)
  }
  return (
    <>
      <div className='p-3 flex gap-8 justify-between transition-all'>
        <SideMenu toggleMenu={toggleMenu}/>
        <Main toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}/>
      </div>
    </>
  )
}

export default App
