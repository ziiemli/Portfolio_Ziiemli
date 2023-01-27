import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <div className="menu">
                <div className="menu__line"></div>
                <div className="menu__line"></div>
                <div className="menu__line"></div>
            </div>
            {/* {menu && 
            <NavLink>
                <img src="" alt="losage select" />
                <p>{title}</p>
            </NavLink>
            } */}
        </div>
    );
};

export default Menu;