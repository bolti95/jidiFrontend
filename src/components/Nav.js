import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>

        <header>
                <nav className="navContainer">
                <h2 className="title">JIDI ELECTRONICS</h2>

                <p> <Link to="/">Shop
                <ion-icon name="home-outline"></ion-icon>
                </Link></p> 

                <p > <Link to="basket">Basket
                <ion-icon name="basket-outline" className="basketIcon"></ion-icon>
                </Link></p>

                <p> <Link to="checkout">Checkout
                <ion-icon name="card-outline"></ion-icon>
                
                </Link></p>

                </nav>
        </header>
        </div>


    )
}

export default Nav;