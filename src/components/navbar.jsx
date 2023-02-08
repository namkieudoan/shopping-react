import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';

import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <ShoppingCart/>
            </Link>
        </div>
    );
}

export default Navbar;