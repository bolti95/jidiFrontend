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

   state={
      nameInputText: '',
      emailInputText: '',
      h1: '',
      h2: '',
   }
   onSubmit = (event) => {
      event.preventDefault()
      this.setState({
         h1: this.state.nameInputText,
         h2: this.state.emailInputText
      })
   }

   nameHandler = e => {
      this.setState({ nameInputText: e.target.value });
   };

   emailHandler = e => {
      this.setState({ emailInputText: e.target.value });
   };
   
    render() {
        
      //   const { basketCost } = this.props
      //   const { basketTotal } = this.props

    return (
                <div className="container">
                   <form  onSubmit={this.onSubmit} >
                     <h1>CHECKOUT</h1>
                     <h4>Please fill out the form with the correct details</h4>
                     <div className="info">
                        
                      <label className="customer-name" for="customerName">Name:</label>
                      <input type="text" onChange={event => this.nameHandler(event)}
                      value={this.state.nameInputText} name="customer-name"/>


                      <label className="customer-email" for="customerEmail">Email Address:</label>
                      <input type="text" onChange={event => this.emailHandler(event)}
                      value={this.state.emailInputText} name="customer-email"/>

                  
                      {/* <label className="sale-amount" for="saleAmount"></label>
                        <h1>Total Amount: £{basketCost}</h1>
                     */}
                      
                      <br/>
                  
                      <div className="payNowBtn">
                      <button type="submit" value="payNow">Pay Now</button>
                      </div>
                        
                      {/* <div className="cancelOrderBtn">
                        <button type="submit" value="cancel" onClick={() => cancelOrder('cancel', basketTotal)}>Cancel Order</button>
                      </div> */}
                       
                     </div>
                     
                </form>
                     <h1>{this.state.h1}</h1>
                     <h2>{this.state.h2}</h2>
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



//code for connecting with backend

// async joinRoom(event) {
//    event.preventDefault();

//    let response = await fetch('http://localhost:3001/room/join', {
//        method: 'POST',
//        headers: {
//            'content-type': 'application/json'
//        },
//        body: JSON.stringify({ roomKey: this.state.inputValue })
//    });

//    response = await response.json();

//    if (response.err) {
//        this.setState({ message: response.err });
//        return;
//    }

//    this.state.setRoomKey(response.key);
// }