import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/addAction';


const Home = () => {
    const [basketNumbers, setBasketNumbers] = useState(0)

    const addToBasket = () => {
        setBasketNumbers(basketNumbers + 1);
        console.log("Button Clicked");
    }


        return (
            <div>
                <div className="grid-container">
                        
                        <a href="/">Shopp</a>

                
                </div>

                <h2>Current Numbers in Basket {basketNumbers}</h2>

            </div>

        )

}
export default Home;