import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Login extends Component {

    state = {
        userName: '',
        password: ''
    }

    handleUserNameChange = (event) => {
        this.setState({userName: event.target.value}); 
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value}); 
    }

    loginUser = async (event) => {
        event.preventDefault()


        let userLoggedIn = await fetch("http://localhost:3005/login/authorised", { // watch this route, will need to be the same in the back
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
    
                userName: this.state.userName,
                // userPassword: this.state.password
                // password: 
                                          
                // make sure these values are correct,,
          
            })
        });
        userLoggedIn = await userLoggedIn.json();
        console.log(userLoggedIn);   
    }


    render () {
        return (
                    <div className="loginContainer">
                        <div classname="card">
                            <form onSubmit={this.loginUser} className="inputContainer">                            
                            <h1>Log In</h1>
                            <label className="customer-name">User Name:</label>
                            <input type="text" className="inputContainer" onChange={this.handleUserNameChange}/>
                            <label className="customer-password">Password:</label>
                            <input type="text" className="inputContainer" onChange={this.handlePasswordChange}/>
                            <button type="submit" className="inputContainerLogin"  value="login">Log In</button>                            
                            </form>
                        </div>

                    </div>

        )
    }
}

export default Login;