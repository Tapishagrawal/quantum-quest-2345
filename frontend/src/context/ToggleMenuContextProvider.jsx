import React, { createContext, useState } from 'react'

export const ToggleMenuContext = createContext();

const ToggleMenuContextProvider = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(prev => !prev)
    }


    return (
        <ToggleMenuContext.Provider value={{handleToggleMenu, toggleMenu}}>
            <div>
                {children}
            </div>
        </ToggleMenuContext.Provider>
    )
}
export default ToggleMenuContextProvider;

