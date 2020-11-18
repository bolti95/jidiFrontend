import React , { Component } from 'react';
import { connect } from 'react-redux';
import { cancelOrder } from '../actions/cancelOrder';
import { productQuantity }from '../actions/productQuantity'

import '../App.css';


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
        this.checkIfNumber();
    }

    checkIfNumber = () => {
        if (isNaN(this.state.cvc || this.state.expiryDate || this.state.cardNumber) === true){
          alert("Please enter numerical values.")
        } else {
            console.log('okay')
        }
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
    
  
                desktop: this.props.basketProps.products.desktop.numbers,
                laptop: this.props.basketProps.products.laptop.numbers,
                iphone: this.props.basketProps.products.iphone.numbers,
                phonecase: this.props.basketProps.products.phonecase.numbers,
                fitbit: this.props.basketProps.products.fitbit.numbers
              
                                          
                // make sure these values are correct,,
          
            })
        });
        updateProducts = await updateProducts.json();
        console.log(updateProducts);
           
    //     // this.reset()
    //     // this.setState({});
    }

    initialState = () => {
        this.props.basketProps.productsInBasket = 0;
        this.props.basketProps.basketCost = 0;
        this.props.basketProps.basketNumbers = 0;
  
            this.setState({
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
            })
  

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
        // setTimeout(function(){initialState()}, 5000)
        setTimeout(function () {
            window.location.reload();
        }, 2800);

    }

  

 
    render() {


        return (

                <div className="infoContainer">
                    <div className="checkoutTitle">
                        <h1 className="checkoutTitle">CHECKOUT</h1>
                            <h4 className="subText">Please fill out the form with the correct details</h4>
                        </div>

                                <form className="checkoutInfo">
                                        <div className="info">
                                            <label className="nameContainer">Name <ion-icon name="accessibility-outline"></ion-icon></label>
                                            <input type="text" className="inputContainer" onChange={this.handleNameChange}/>

                                            <label className="emailContainer" >Email Address <ion-icon name="mail-outline"></ion-icon></label>
                                            <input type="text" className="inputContainer"onChange={this.handleEmailChange}/>

                                            <label className="customer-name" >Card Number <ion-icon name="card-outline"></ion-icon></label>
                                            <input type="text" className="inputContainer" onChange={this.handleCardChange}/>

                                            <label className="customer-name" >Expiry Date <ion-icon name="calendar-outline"></ion-icon></label>
                                            <input type="text" className="inputContainer" onChange={this.handleExpiryDate}/>

                                            <label className="customer-name" >CVC <ion-icon name="checkmark-outline"></ion-icon></label>
                                            <input type="text" className="inputContainer" onChange={this.handleCvc}/>


                                            <label className="sale-amount" ></label>
                                            <h1>Total Amount: £{parseFloat(this.props.basketCost).toFixed(2)}</h1>

                                            <br/>
                                        
                                            <div className="buttonContainer">
                                                <button type="submit" value="payNow"className="pay" onClick={this.createOrder}>Pay Now</button>
                                                <button type="submit" value="cancel" className="cancel" onClick={() => cancelOrder('cancel', this.props.basketTotal)}>Cancel Order</button>
                                                
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





