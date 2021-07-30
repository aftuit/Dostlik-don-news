import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="container-nav">
            <nav className="navbar d-flex justify-content-between align-items-center">
                <Link to='/'><img src="/assets/icons/logo.svg" alt="" /></Link>

                <div className="input-group">
                    <img src="/assets/icons/search.svg" alt="" />

                    <div className="input-group-append">
                        <input type="text" placeholder="saytdan izlang" />
                    </div>
                </div>

                <div className="log d-flex align-items-center">
                    <NavLink to="/login">
                        <button type="button d-flex align-items-center" className="btn">
                            <img src="/assets/icons/login.svg" alt="" />
                            <span className="ml-2">Login</span>
                        </button>
                    </NavLink>
                    <NavLink to="/inform">
                        <button type="button" className="btn text-success ml-3 inform">
                            <img src="/assets/icons/success-tel.svg" alt="" />
                            <span className="ml-2">99872 335-41-16</span>
                        </button>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};


export default Navbar;