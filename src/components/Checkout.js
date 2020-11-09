//hello world
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { cancelOrder } from '../actions/cancelOrder';
import { showTotal } from '../actions/showTotal';
import '../components/Checkout.css';

// THIS IS HOW DEAN SHOWED US TO CONNECT BACKEND
// const addToBasket = () => {

//     fetch("http://localhost:3005/basket/add", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
            
//         }, 
//         body: JSON.stringify({})

//     }) 

// }


class Checkout extends Component {
   
    render() {
        
        const { basketCost } = this.props
        const { basketTotal } = this.props
    return (
                <div className="container">
                   <form>
                     <h1>CHECKOUT</h1>
                     <h4>Please fill out the form with the correct details</h4>
                     <div className="info">
                
                   
            
                      <label className="customer-name" for="customerName">Name:</label>
                      <input type="text" name="customer-name"/>
           
            
                      <label className="customer-name" for="customerName">Email Address:</label>
                      <input type="text" name="customer-name"/>
           
            
                      <label className="customer-name" for="customerName">Card Number:</label>
                      <input type="text" name="customer-name"/>
           
                
                
                      <label className="sale-amount" for="saleAmount"></label>
                        <h1>Total Amount: £{basketCost}</h1>
                    
                      
                      <br/>
                  
                      <div className="payNowBtn">
                      <button type="submit" value="payNow">Pay Now</button>
                      </div>
                        
                      <div className="cancelOrderBtn">
                        <button type="submit" value="cancel" onClick={() => cancelOrder('cancel', basketTotal)}>Cancel Order</button>
                        
                      </div>
                       
                     </div>
                    
                </form>
            </div>
                
      )
   } 
}

const mapStateToProps = state => ({
   
    basketCost: state.basketState.basketCost,
    basketState: state.basketState.basketState
 

    //comes from our index.js combined reducer, everything comes from here
});

export default connect(mapStateToProps, { cancelOrder })(Checkout);