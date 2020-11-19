import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';


class Signup extends Component {

    state = {
        name: '',
        userName: '',
        email: '',
        password: '',
        userCreated: false
    }


    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    handleUserNameChange = (event) => {
        this.setState({userName: event.target.value}); 
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value}); 
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value}); 
    }

    createUser = async (event) => {
        event.preventDefault()





        let newUser = await fetch("http://localhost:3005/signup/create", { // watch this route, will need to be the same in the back
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 


            body: JSON.stringify({
    
                name: this.state.name,
                userName: this.state.userName,
                email: this.state.email,
                userPassword: this.state.password
                // password: 
                                          
                // make sure these values are correct,,
          
            })
        });
        newUser = await newUser.json();
        console.log(newUser); 
        this.setState(() => ({userCreated: true}))
        // setTimeout(function () {
        //     window.location.reload();
        // }, 2800);  
    }

    render () {
        if (this.state.userCreated) {
            return <Redirect to='/usercreated' />
        }
        return (

                <div className="loginContainer">
                    <div classname="card">
                        <form onSubmit={this.createUser} className="inputContainer">
                        
                            <h1>Sign up</h1>
                            <h4 className="signupMessage">Create an account to view your orders</h4>

                            <label className="customer-name">Name:</label>
                            <input type="text" className="inputContainer" onChange={this.handleNameChange}/>

                            <label className="customer-name">User Name:</label>
                            <input type="text" className="inputContainer"onChange={this.handleUserNameChange}/>

                            <label className="customer-name">Email Address:</label>
                            <input type="text" className="inputContainer"onChange={this.handleEmailChange}/>

                            <label className="customer-name">Password:</label>
                            <input type="password" name="password" className="inputContainer"onChange={this.handlePasswordChange}/>

                            <button type="submit" value="payNow" className="inputContainerLogin">Create user</button>
                            <label>
                            Remember me <input type="checkbox"></input>
                            </label>
                        </form>                       
                    </div>       
                </div>
        )
    }
}

export default Signup;