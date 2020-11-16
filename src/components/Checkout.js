import React , { Component } from 'react';
import { connect } from 'react-redux';
import { cancelOrder } from '../actions/cancelOrder';
import { productQuantity }from '../actions/productQuantity'

import '../components/Checkout.css';


class Checkout extends Component {
    constructor({props, basketProps}) {
        
        super();

        this.state = {
            customerName: '',
            email: '',
            cardNumber: '',
            expiryDate: '',
            cvc: '',
            h1: '',
            h2: '',
            thankYou: '',
            orderNumber:  '',
            orderMessage: ''
        }
    }



    handleNameChange = (event) => {
        this.setState({customerName: event.target.value});
    }
    
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }


    handleCardChange = (event) => {
        this.setState({cardNumber: event.target.value});
    }


    handleExpiryDate = (event) => {
        this.setState({expiryDate: event.target.value});
    }

    handleCvc = (event) => {
        this.setState({cvc: event.target.value});
    }



    updateStockedProducts = async () => {
        // event.preventDefault()
        
        // console.log(this.basketProps.products.desktop.numbers)

        let updateProducts = await fetch("http://localhost:3005/checkout/updateStockedProducts", { // watch this route, will need to be the same in the back
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }, 


            body: JSON.stringify({
    
    //             ID: ,
    //             ItemName: ,
                desktop: this.props.basketProps.products.desktop.numbers,
                laptop: this.props.basketProps.products.laptop.numbers,
                iphone: this.props.basketProps.products.iphone.numbers,
                phonecase: this.props.basketProps.products.phonecase.numbers,
                fitbit: this.props.basketProps.products.fitbit.numbers,
                // Category: ,
                // Price: ,
                // Quantity: ,
                                          
                // make sure these values are correct,,
          
            })
        });
        updateProducts = await updateProducts.json();
        console.log(updateProducts);
           
    //     // this.reset()
    //     // this.setState({});
    }




    createOrder = async (event) => {
        event.preventDefault()

        let items = this.props.basketProps.productsInBasket.join();
        console.log(this.props.basketProps.products.desktop.numbers)

        let orderNumber = await fetch("http://localhost:3005/checkout/create", { // watch this route, will need to be the same in the back
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 


            body: JSON.stringify({
    
                customerName: this.state.customerName,
                email: this.state.email,
                cardNumber: this.state.cardNumber,
                expiryDate: this.state.expiryDate,
                cvc: this.state.cvc,
                items: items,
                saleAmount: this.props.basketCost,
                                          
                // make sure these values are correct,,
          
            })
        });
        this.updateStockedProducts()
        orderNumber = await orderNumber.json();
        console.log(orderNumber);
        this.setState({
                 orderMessage: 'Your order number is ',
                 orderNumber:  orderNumber.orderNumber,
                 h1: this.state.customerName,        //     h1: this.state.customerName,
                 h2: this.state.email,
                 thankYou: 'Thank you for your order!'
        })         

    }

 
    render() {



        
        console.log(this.props.basketProps.productsInBasket);


        return (
                <div className="container">
                    <form className="customerInfo">
                        <h1>CHECKOUT</h1>
                        <h4>Please fill out the form with the correct details</h4>

                        <div className="info">

                        <label className="customer-name" >Name:</label>
                        <input type="text" onChange={this.handleNameChange}/>

                        <label className="customer-name" >Email Address:</label>
                        <input type="text" onChange={this.handleEmailChange}/>

                        <label className="customer-name" >Card Number:</label>
                        <input type="text" onChange={this.handleCardChange}/>

                        <label className="customer-name" >Expiry Date:</label>
                        <input type="text" onChange={this.handleExpiryDate}/>

                        <label className="customer-name" >CVC:</label>
                        <input type="text" onChange={this.handleCvc}/>


                        <label className="sale-amount" ></label>
                        <h1>Total Amount: £{this.props.basketCost}</h1>

                        <br/>

                        <div className="payNowBtn">
                            <button type="submit" value="payNow" onClick={this.createOrder}>Pay Now</button>
                        </div>
                        
                        <div className="cancelOrderBtn">
                            <button type="submit" value="cancel" onClick={() => cancelOrder('cancel', this.props.basketTotal)}>Cancel Order</button>
                        </div>
                    </div>




                </form>     

                <h2>{this.state.thankYou}</h2>
                <h1>{this.state.h1}</h1>
                <h2>{this.state.h2}</h2>
                <h2>{this.state.orderNumber}</h2>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    basketCost: state.basketState.basketCost,
    basketNumbers: state.basketState.products.numbers,
    basketProps: state.basketState

    

    //comes from our index.js combined reducer, everything comes from here
});

export default connect(mapStateToProps, { cancelOrder , productQuantity})(Checkout);





