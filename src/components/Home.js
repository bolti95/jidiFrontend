import React, { useState } from 'react';
import '../App.css';
import Desktop from './images/desktop.jpg';
import Laptop from './images/laptop.jpg';
import Iphone from './images/iphone.jpg';
import Phonecase from './images/phonecase.jpg';
import Fitbit from './images/fitbit.jpg';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/addAction';


const Home = () => {
    
    return(
        <div className="container">
            <div className="image">
                <img src={Desktop} alt="desktop" />
                <h2>HP 22-df0005na 21.5" All-in-One PC - Intel® Core™ i3, 128 GB SSD</h2>
                <h3>Want a desktop computer that doesn't take up loads of space? The HP 22-df0005na 21.5" All-in-One PC is here for you. By cramming all the technical bits of a traditional tower computer into a single monitor, you get all the specs and power you need with half the hardware.</h3>
                <h3>£529.00</h3>
                <a className="addToCart" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Laptop} alt="laptop" />
                <h2>APPLE 13.3" MacBook Air</h2>
                <h3>Incredibly light and boasting a speedy performance, get your work done anywhere with the MacBook Air (2020). And made from 100% recycled aluminium, it's the greenest MacBook yet.</h3>
                <h3>£943.00</h3>
                <a className="addToCart" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Iphone} alt="iphone" />
                <h2>APPLE iPhone 11 - 64 GB, Black </h2>
                <h3>Stretching from edge-to-edge 6.1” Liquid Retina display offers more space for all your content. This stunning screen offers plenty of detail and superb brightness, and True Tone technology for accurate colours.</h3>
                <h3>£599.00</h3>
                <a className="addToCart" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Phonecase} alt="phonecase" />
                <h2>APPLE iPhone 11 Pro Leather Case - Black </h2>
                <h3>Designed to hug the curves of your iPhone without compromising the slimness of the mobile device, this Apple iPhone case is made from premium French leather, giving you a soft, comfortable and solid grip.</h3>
                <h3>£34.97</h3>
                <a className="addToCart" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Fitbit} alt="fitbit" />
                <h2>FITBIT Versa 3 - Pink Clay & Soft Gold</h2>
                <h3>The Fitbit Versa 3 helps you to track your health every day. You can monitor your heart rate while you're exercising or resting, perfect for keeping track of trends. It tracks your everyday activity, including steps, distance and calories burned.</h3>
                <h3>£199.00</h3>
                <a className="addToCart" href="#">Add to Cart</a>
            </div>
        </div>
        
    )
}

        
export default Home;