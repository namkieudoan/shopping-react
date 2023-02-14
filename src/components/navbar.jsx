import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';

import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <span className="nav-item "><Link to="/" >Shop</Link></span>
            <span className="nav-item"><Link to="/contact" >Contact</Link></span>
            <span className="nav-item"><Link to="/cart" >
                <ShoppingCart/>
                </Link>
            </span>
        </div>
    );
}

export default Navbar;