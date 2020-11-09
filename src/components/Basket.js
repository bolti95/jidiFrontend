import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { productQuantity } from '../actions/productQuantity';

import Desktop from './images/desktop.jpg';
import Laptop from './images/laptop.jpg';
import Iphone from './images/iphone.jpg';
import Phonecase from './images/phonecase.jpg';
import Fitbit from './images/fitbit.jpg';

import { Link } from 'react-router-dom';

import '../App.css';


function Basket ({basketProps, productQuantity}) {
    console.log(basketProps)

    let productsInBasket = [];

    Object.keys(basketProps.products).forEach( function(item){
        console.log(item);
        console.log(basketProps.products[item].inBasket);
        if(basketProps.products[item].inBasket) {
            productsInBasket.push(basketProps.products[item])
            //adding everythin we want to the basket page
            //productsInBasket is everything in the customer basket
        }
        console.log(productsInBasket);
        //need to know what items are in the basket to add
    })

    const productImages =(product) => {
            if (product.tagName === 'laptop') {
                return Laptop;
            } else if (product.tagName === 'iphone') {
                return Iphone
            } else if (product.tagName === 'phonecase') {
                return Phonecase
            } else if (product.tagName === 'fitbit') {
                return Fitbit
            } 
            
    }



    // const productImages = [Laptop, Iphone, Phonecase, Fitbit]
    console.log("My product is");
   
    //fragment is a fake place holder that needs importing
    productsInBasket = productsInBasket.map( (product, index) => {
        return (
            <Fragment key={index}>
                 {/* <div className="product">
                    <img src={productImages(product)} alt="laptop" />
                    <span className="product">{product.name}</span>
                </div> */}
                <div className="price">£{product.price}</div>
                <div className="quantity">
                    <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)}className="decrease" name="arrow-back-circle-outline"></ion-icon>
               
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)}className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                  
                <div className="total">£{product.numbers * product.price}, 00</div>
          
            </Fragment>
        

    )
});
    // console.log(product);

    return (

                    <div className="container-products">
                        <div className="product-header">
                            <h5 className="title">Product</h5>
                            <h5 className="price">Price</h5>
                            <h5 className="quantity">Quantity</h5>
                            <h5 className="total">Total</h5>
                        
                        <div className="products">
                            { productsInBasket }
                        </div>
                        <div className="basketTotalContainer">
                            <h4 classname="basketTotalTitle">Basket Total</h4>
                            <h4 classname="basketTotal">{basketProps.basketCost}, 00</h4>
                        
                    </div>          

                <p> <Link to="checkout">Checkout
                <ion-icon name="card-outline"></ion-icon>
                
                </Link></p>
              </div>
        </div>


    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState

    //comes from our index.js combined reducer, everything comes from here
});

export default connect(mapStateToProps, { productQuantity })(Basket);