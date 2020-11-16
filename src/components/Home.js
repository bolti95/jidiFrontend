import React, { useState } from 'react';
import './Home.css';
import Desktop from './images/desktop.jpg';
import Laptop from './images/laptop.jpg';
import Iphone from './images/iphone.jpg';
import Phonecase from './images/phonecase.jpg';
import Fitbit from './images/fitbit.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';





const Home = (props) => {





        return (
            <div className="grid-container">
        
                  

                <div className="product">
                    <img src={Desktop} alt="desktop" />
                    <h2 className="make">HP 22-df0005na 21.5" All-in-One PC - Intel® Core™ i3, 128 GB SSD</h2>
                    <h3 className="desc">Want a desktop computer that doesn't take up loads of space? The HP 22-df0005na 21.5" All-in-One PC is here for you. By cramming all the technical bits of a traditional tower computer into a single monitor, you get all the specs and power you need with half the hardware.</h3>
                    <h3 className="price">£529.00</h3>
                    <a onClick={() => props.addBasket("desktop")} className="addToCart" >Add to Cart</a>
                </div>

                
                <div className="product">
                    <img src={Laptop} alt="laptop" />
                    <h2 className="make">APPLE 13.3" MacBook Air</h2>
                    <h3 className="desc">Incredibly light and boasting a speedy performance, get your work done anywhere with the MacBook Air (2020). And made from 100% recycled aluminium, it's the greenest MacBook yet.</h3>
                    <h3 className="price">£943.00</h3>
                    <a onClick={() => props.addBasket("laptop")} className="addToCart" >Add to Cart</a>
                </div>

                <div className="product">
                    <img src={Iphone} alt="iphone" />
                    <h2 className="make">APPLE iPhone 11 - 64 GB, Black </h2>
                    <h3 className="desc">Stretching from edge-to-edge 6.1” Liquid Retina display offers more space for all your content. This stunning screen offers plenty of detail and superb brightness, and True Tone technology for accurate colours.</h3>
                    <h3 className="price">£599.00</h3>
                    <a onClick={() => props.addBasket("iphone")} className="addToCart" >Add to Cart</a>
                </div>

                <div className="product">
                    <img src={Phonecase} alt="phonecase" />
                    <h2 className="make">APPLE iPhone 11 Pro Leather Case - Black </h2>
                    <h3 className="desc">Designed to hug the curves of your iPhone without compromising the slimness of the mobile device, this Apple iPhone case is made from premium French leather, giving you a soft, comfortable and solid grip.</h3>
                    <h3 className="price">£34.97</h3>
                    <a onClick={() => props.addBasket("phonecase")} className="addToCart">Add to Cart</a>
                </div>
                
                <div className="product">
                    <img src={Fitbit} alt="fitbit" />
                    <h2 className="make">FITBIT Versa 3 - Pink Clay & Soft Gold</h2>
                    <h3 className="desc">The Fitbit Versa 3 helps you to track your health every day. You can monitor your heart rate while you're exercising or resting, perfect for keeping track of trends. It tracks your everyday activity, including steps, distance and calories burned.</h3>
                    <h3 className="price">£199.00</h3>
                    <a onClick={() => props.addBasket("fitbit")} className="addToCart" >Add to Cart</a>

                </div>

        </div>

                
        
    )
}
export default connect(null, { addBasket })(Home);

