import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import store from '../store';



const Nav = (props) => {
    console.log(props)
    const state = store.getState()
    // console.log(state.basketReducer);

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


                </nav>
        </header>
        </div>


    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})



export default connect(mapStateToProps, { getNumbers })(Nav);