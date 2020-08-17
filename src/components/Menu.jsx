import React from 'react'
import Group5 from '../assets/Group 12.png'
import Path20 from '../assets/Path 20.png'
import '../styles/Menu.css'

const Menu = () => {
    return(
        <div id="Menu">
            <div id="LogoContainer">
                <img src={Group5} alt="" srcset=""/>  
            </div>
            <nav>
                <a href="#" className="Item">LISTINGS</a>
                <a href="#" className="Item">ABOUT</a>
                <a href="#" className="Item">JUAN ANTONIO</a>
                <a href="#" id="InstagramLogo"><img src={Path20} alt=""/></a>
            </nav>
        </div>
    )
}

export default Menu