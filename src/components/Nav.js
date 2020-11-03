import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>

        <header>
                <nav className="navContainer">
                <h2 className="title">JIDI ELECTRONICS</h2>

                <p className="Link1"> <Link to="/">Shop</Link></p> 

                <p className="Link2"> <Link to="basket">Basket</Link></p>

                <p className="Link3"> <Link to="checkout">Checkout</Link></p>

                </nav>
        </header>
        </div>


    )
}

export default Nav;