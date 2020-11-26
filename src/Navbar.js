import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from './images/logo.svg'
import {useGlobalContext} from './context'


const Navbar = ()=> {
    const {openSideBar, openSubMenu, closeSubMenu } = useGlobalContext()

    const showSubMenu  = (e) => {
        const page = e.target.textContent
        const tempVal = e.target.getBoundingClientRect()
        const center = (tempVal.left + tempVal.right) / 2
        const bottom = tempVal.bottom - 3
        openSubMenu(page, {center, bottom})
        
    }
    const handleCloseSubmenu = (e) => {
        if(!e.target.classList.contains('link-btn')){
            closeSubMenu()
        }
    }
    return (
    <nav>
        <div className="nav-container" onMouseOver={handleCloseSubmenu}>
            <div className="nav-header">
                <img src={logo} alt="stripe logo" />
                <button className="toggle-btn" onClick={openSideBar}>
                    <FaBars />
                </button>
            </div>
            <ul className="nav-link">
                <li>
                    <button className="link-btn" onMouseOver={showSubMenu}>Products</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={showSubMenu}>Developers</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={showSubMenu}>Company</button>
                </li>
            </ul>
            <button className="btn signin-btn">Sign in</button>
        </div>
    </nav>
    )
}

export default Navbar