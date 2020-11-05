//hello world
import React , { Component } from 'react';
import { connect } from 'react-redux';
import '../components/Checkout.css';



class Checkout extends Component {
    render() {
    return (
                <div className="container">
                   <form>
                     <h1>CHECKOUT</h1>
                     <div className="info">
                
                      <label className="customer-id" for="id">Customer ID:</label>
                      <input type="text" name="customer-id"/>
            
                      <label className="customer-name" for="customerName">Name:</label>
                      <input type="text" name="customer-name"/>
           
                      <label className="item" for="item">Item:</label>
                      <input type="text" name="item"/>
                
                      <label className="sale-amount" for="saleAmount">Total Amount:</label>
                      <input type="text" name="sale-amount"/>
                      
                      <br/>
                      <input type="submit" value="submit"></input>
                     {/* <h4 classname="basketTotal">{basketProps.basketCost}, 00</h4> */}
                     
                     </div>
                </form>
            </div>
                
      )
   } 
}

export default Checkout;