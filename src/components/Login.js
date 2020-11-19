import React, { Component } from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';


class Login extends Component {
    constructor({props, basketProps}) {
        
        super();

        this.state = {
            userName: '',
            password: '',
            loggedIn: '',
<<<<<<< HEAD
<<<<<<< HEAD
            logout: 'login',
            toDashboard: false
=======
            logout: 'logoin'
>>>>>>> 3e3e3845ce1ac1c02c089ac3918bf06bd0199b97
=======
            logout: 'login',
            toDashboard: false

>>>>>>> 1ced5743e9a40d1fb560b5fed1b2c7d65db45dd9
        }
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
        this.props.basketProps.logout = 'logout'
        this.setState({
            loggedIn: 'hello ' + this.state.userName + ' you are now logged in!',
         })
        
        // setTimeout(function () {
        //     window.location.reload();
        // }, 2800);  
        logout(this.state.logout);
        this.setState(() => ({toDashboard: true}))
    }


    render () {
        if (this.state.toDashboard) {
            return <Redirect to='/dashboard' />
        }
        return (
                    <div className="loginContainer">
                        <div classname="card">
                                <form onSubmit={this.loginUser} className="inputContainer">                            
                                <h1>Log In</h1>
                                    <label className="customer-name">User Name:</label>
                                    <input type="text" className="inputContainer" onChange={this.handleUserNameChange}/>
                                    <label className="customer-password">Password:</label>
                                    <input type="password" name="password" className="inputContainer" onChange={this.handlePasswordChange}/>
                                    <button type="submit" className="inputContainerLogin"  value="login">{this.state.logout}</button>                            
                                    <label>
                                    Remember me <input type="checkbox"></input>
                                    </label>   
                                </form>
                        
                        </div>

                    </div>

        )
    }
}

const mapStateToProps = state => ({

    basketProps: state.basketState   
    //comes from our index.js combined reducer, everything comes from here
});

export default connect(mapStateToProps, {logout})(Login);