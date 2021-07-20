import React from 'react' ;
import { NavLink } from 'react-router-dom';
import "./navstyle.css" ;


const Navbar = () => {
    return(
        <React.Fragment>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </React.Fragment>
    )
}


export default Navbar ; 