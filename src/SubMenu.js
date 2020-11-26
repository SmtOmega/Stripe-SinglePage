import React, { useEffect, useRef, useState } from 'react'
import {useGlobalContext} from './context'

const SubMenu = () => {
    const {isSubMenuOpen, location, page:{page, links}, } = useGlobalContext()
    const container = useRef(null)
    const [columns, setColumns] = useState('')
    useEffect(()=> {
        setColumns('col-2')
        const {center, bottom} = location
        const subMenu = container.current
        subMenu.style.left = `${center}px`
        subMenu.style.top = `${bottom}px`
        if(links.length === 3){
            setColumns('col-3')
        }
        else if(links.length > 3){
            setColumns('col-4')
        }
    }, [location])
    return(
    <aside className={`${isSubMenuOpen ? "submenu show-submenu" : "submenu"}`} ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
                const {label, icon, url} = link
                return <a key={index} href={url}>
                    {icon}
                    {label}
                </a>
            })}
        </div>
    </aside>
    
    )
}
export default SubMenu