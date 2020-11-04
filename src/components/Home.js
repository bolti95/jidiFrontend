import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';



const Home = (props) => {



    console.log(props);


        return (
            <div>
                <div className="grid-container">
                        
                        <a href="/">Shopp</a>

                
                </div>

                <h2>Current Numbers in Basket </h2>

            </div>

        )

}
export default connect(null, { addBasket })(Home);

