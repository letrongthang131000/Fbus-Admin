import React, { useState } from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import sidebar_routes from '../../assets/JsonData/sidebar_routes'


const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="sidebar">
        <div className="sidebar__logo">
            <img src={logo} alt="company logo"/>
        </div>
        <div className="sidebar__item">
            {
                sidebar_routes.map((nav,index) => (
                    <Link to={nav.link} key={`nav-${index}`} className={`sidebar__item-inner ${activeIndex === index && 'active'}`}>
                        <div className="sidebar__menu__item__icon">
                            {nav.icon}
                        </div>
                        <div className="sidebar__menu__item__txt">
                            {nav.text}
                        </div>
                    </Link>
                ))
            }
            
        </div>
    </div>
  )
}

export default Sidebar