import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.css'


const Navbar = (props) => {
return(
    <div>
        <div>
            <NavLink to='/Home'>Home</NavLink>
            <NavLink to='/Components'>Components</NavLink>
        </div>
    </div>
)
}

export default Navbar;