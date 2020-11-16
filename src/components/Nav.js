import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import store from '../store';



const Nav = (props) => {
   
    const state = store.getState()
  

    useEffect(() => {
        getNumbers();
    }, [])

    return (
        <div>

        <header>
                <nav className="navContainer">
                <h2 className="title">JIDI ELECTRONICS</h2>

                <p className="shop"> <Link to="/">Shop
                <ion-icon name="home-outline" className="homeIcon"></ion-icon>
                </Link></p> 

                <p className="basket"> <Link to="basket">Basket <span>{props.basketProps.basketNumbers}</span>
                <ion-icon name="basket-outline" className="basketIcon"></ion-icon>
                </Link></p>

                <p className="login"> <Link to="login">Login
                <ion-icon name="home-outline" className="homeIcon"></ion-icon>
                </Link></p> 

                <p className="signup"> <Link to="signup">Sign Up
                <ion-icon name="home-outline" className="homeIcon"></ion-icon>
                </Link></p> 


                </nav>
        </header>
        </div>


    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})



export default connect(mapStateToProps, { getNumbers })(Nav);