import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className = "navContainer">

            <p> <Link to="/">Shop</Link></p> 

            <p> <Link to="basket">Basket</Link></p>

            <p> <Link to="checkout">Checkout</Link></p>

        </nav>
    )
}

export default Nav;