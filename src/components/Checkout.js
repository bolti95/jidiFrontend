//hello world
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { cancelOrder } from '../actions/cancelOrder';
import '../components/Checkout.css';

// THIS IS HOW DEAN SHOWED US TO CONNECT BACKEND

class Checkout extends Component {
    constructor(props) {
        super();

        this.state = {
            name: '',
            email: '',
            cardNumber: '',
            h1: '',
            h2: ''
            // orderNumber: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }


    handleCardChange = (event) => {
        this.setState({cardNumber: event.target.value});
    }

    createOrder = async () => {
        let orderNumber = await fetch("http://localhost:3005/basket/checkout", { // watch this route, will need to be the same in the back
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
    
                name: this.state.name,
                email: this.state.emial,
                cardNumber: this.state.cardNumber, // make sure these values are correct,
          
            })
        });

        this.setState({orderNumber});
    }
    
  
   // onSubmit = (event) => {
   //    event.preventDefault()
   //    this.setState({
   //       h1: this.state.nameInputText,
   //       h2: this.state.emailInputText,
   //    })
   // }

   // nameHandler = e => {
   //    this.setState({ nameInputText: e.target.value });
   // };

   // emailHandler = e => {
   //    this.setState({ emailInputText: e.target.value });
   // };
   
    render() {
        console.log(this.state.cardNumber)
        


        return (
                <div className="container">
                    <form>
                        <h1>CHECKOUT</h1>
                        <h4>Please fill out the form with the correct details</h4>

                        <div className="info">

                        <label className="customer-name" for="customerName">Name:</label>
                        <input type="text" onChange={this.handleNameChange}/>

                        <label className="customer-name" for="customerName">Email Address:</label>
                        <input type="text" onChange={this.handleEmailChange}/>

                        <label className="customer-name" for="customerName">Card Number:</label>
                        <input type="text" onChange={this.handleCardChange}/>

                        <label className="sale-amount" for="saleAmount"></label>
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


                     <h1>{this.state.h1}</h1>
                     <h2>{this.state.h2}</h2>
                  

                     {/* THE ABOVE ADD THE NAME AND EMAIL ADDRESS ONTO PAGE - NEED A THANKS MESSAGE */ } 

                     
            </div>
        )
    }
}

const mapStateToProps = state => ({
    basketCost: state.basketState.basketCost,
    basketState: state.basketState.basketState,
    basketNumbers: state.basketState.products.numbers,
    

    //comes from our index.js combined reducer, everything comes from here
});

export default connect(mapStateToProps, { cancelOrder })(Checkout);




