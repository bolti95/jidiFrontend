import React, { Component } from 'react';
import '../App.css';


class Signup extends Component {

    state = {
        userName: '',
        email: ''
    }

    createUser = async (event) => {
        event.preventDefault()



        let newUser = await fetch("http://localhost:3005/signup/create", { // watch this route, will need to be the same in the back
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 


            body: JSON.stringify({
    
                userName: this.state.userName,
                email: this.state.email
                // password: 
                                          
                // make sure these values are correct,,
          
            })
        });
        newUser = await newUser.json();
        console.log(newUser);   
    }

    render () {



        return (

                <div className="container">
                    <div classname="info">
                    <form className="customerInfo">
                        
                        <h1>Sign up</h1>
                        <h4>Create a user account to view your orders</h4>

                        <label className="customer-name" >User name:</label>
                        <input type="text" onChange={this.handleNameChange}/>

                        <label className="customer-name" >Email Address:</label>
                        <input type="text" onChange={this.handleEmailChange}/>

                        <label className="customer-name" >Password:</label>
                        <input type="text" onChange={this.handleEmailChange}/>

                            
                            </form>
                        
                        </div>



                        <br/>

                            <button type="submit" value="payNow">Create user</button>
       
       
            </div>
        )
    }
}

export default Signup;