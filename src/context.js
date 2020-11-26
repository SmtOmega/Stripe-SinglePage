import React, {useState, useContext} from  'react'
import sublinks from './data'

const AppContext = React.createContext()


export const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'', links:[]})

    const openSideBar = () =>{
        setIsSideBarOpen(true)
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }
    const openSubMenu = (text, coordinate) => {
        const pageVal = sublinks.find((link) => text.toLowerCase() === link.page) 
        
        setPage(pageVal)
        setLocation(coordinate)
        setIsSubMenuOpen(true)
        
    }
    const closeSubMenu = () => {
        setIsSubMenuOpen(false)
    }
return <AppContext.Provider 
        value ={
            {
                isSideBarOpen,
                isSubMenuOpen,
                page,
                openSideBar,
                closeSideBar, 
                openSubMenu,
                closeSubMenu,
                location,
            }
        }
        >
            {children}
        </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}