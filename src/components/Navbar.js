import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.css"



const Navbar = (props) => {
    return (
        <div className="navbar">
            <div>
                <NavLink to='/Home'>Home</NavLink>

                <NavLink to='/Components'>Components</NavLink>

                <NavLink to='/Prop'>Props</NavLink>

                <NavLink to='/State1'>State</NavLink>
                <NavLink to='/Lifecycle'>Lifecycle</NavLink>
                <NavLink to='/Events'>Events</NavLink>
                <NavLink to='/Keys'>Keys</NavLink>
                <NavLink to='/Refs'>Refs</NavLink>
                <NavLink to='/Acync'>Acync</NavLink>
                <NavLink to='/VirtualDom'>VirtualDom</NavLink>




            </div>
        </div>
    )
}

export default Navbar;