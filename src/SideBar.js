import React from 'react'
import sublinks from './data'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './context'

const SideBar = () => {
    const {isSideBarOpen, closeSideBar} = useGlobalContext()
    return(
    <aside className={`${isSideBarOpen ? "sidebar-wrapper show-sidebar": "sidebar-wrapper"}`}>
        <div className="side-bar">
            <button className="close-btn" onClick={closeSideBar}>
                <FaTimes />
            </button>
            <div className="sidebar-links">
                {sublinks.map((link, index)=>{
                    const {page, links} = link
                    return(
                    <div key={index}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                            {links.map((link, index)=>{
                                const {url, label, icon} = link
                                return <a href={url} key={index}>
                                    {icon}
                                    {label}
                                </a> 
                            })}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </aside>
    )
}
export default SideBar