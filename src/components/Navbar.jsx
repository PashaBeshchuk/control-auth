import React from 'react';
import {NavLink} from "react-router-dom"
import './style.css'



const Navbar = () => {
    return <div className="container col-md-8 navbar-body">
        <nav className="navbar navbar-expand-lg" >
            <NavLink className="navbar-brand brand" to="#">Dia</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse container col-md-7" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active ml-4">
                        <NavLink className="nav-link" to="/"> Home</NavLink>
                    </li>
                    <li className="nav-item ml-4">
                        <NavLink className="nav-link" to="#">About us</NavLink>
                    </li>
                    <li className="nav-item ml-4">
                        <NavLink className="nav-link" to="#">Services</NavLink>
                    </li>
                    <li className="nav-item ml-4">
                        <NavLink className="nav-link" to="#">Work</NavLink>
                    </li>
                    <li className="nav-item ml-4">
                        <NavLink className="nav-link" to="#">Contact Us</NavLink>
                    </li>
                </ul>
                
            </div>
            <form className="form-inline my-2 my-lg-2">
                <ul className="navbar-nav  mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Hire us</NavLink>
                    </li>
                </ul>
            </form>
        </nav>

    </div>
}

export default Navbar;