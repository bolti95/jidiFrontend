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
            customerName: '',
            email: '',
            cardNumber: '',
            h1: '',
            h2: '',
            thankYou: ''
           
            // orderNumber: ''
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

    createOrder = async (event) => {
        // event.preventDefault()
        this.setState({

            h1: this.state.customerName,
            h2: this.state.email,
            thankYou: 'thank you'
        })
        let orderNumber = await fetch("http://localhost:3005/checkout/create", { // watch this route, will need to be the same in the back
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
    
                customerName: this.state.customerName,
                Items: this.props.basketState.products,
                SaleAmount: this.props.basketCost,
                email: this.state.emial,
                cardNumber: this.state.cardNumber, // make sure these values are correct,
          
            })
        });

        this.setState({orderNumber});
    }

    render() {
        // console.log(this.state.cardNumber)
        // console.log(this.body)

        return (
                <div className="container">
                    <form className="customerInfo">
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
                <h2>{this.state.thankYou}</h2>
                <h1>{this.state.h1}</h1>
                <h2>{this.state.h2}</h2>
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


{/* const { customerName } = this.props.customer.name */}

        // const { basketCost } = this.props
        // const { basketTotal } = this.props
        // const { customerProps } = this.props
        // const { customerName } = this.props.name;
        // console.log(customerProps)



        //    handleChange = ({target:{value}}) => {
//        const { createCustomerOrder } = this.props;
//        createCustomerOrder(value)
//    }


    // updateCustomerName(event) {
    //    this.props.createCustomerOrder(event.target.value)
    // //    this.customer.name = event.target.value
    // }
  