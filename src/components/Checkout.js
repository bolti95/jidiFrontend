//hello world
import React , {Component} from 'react';


class Checkout extends Component {
    state = {
        nameInputText: '',
        emailInputText: '',
        h1: '',
        h2: '',
        h3: ''
    }

onSubmit = (event) => {
    event.preventDefault()
    this.setState({
        h1: this.state.nameInputText,
        h2: this.state.emailInputText,
        h3: "hello"
    })
}

nameHandler = e => {
    this.setState({ nameInputText: e.target.value})
}

emailHandler = e => {
    this.setState({ emailInputText: e.target.value})
}

render() {
    return (
        <div>
            <form>
                <h1>Checkout</h1>
                <h4>Please fill out the form</h4>
            <label className="customer-name" for="customerName">Name:</label>
            <input type="text" onChange={event => this.nameHandler(event)} 
            value={this.state.nameInputText} name="customer-name"/>

            <label className="customer-email" for="customerEmail">Email Address:</label>
            <input type="text" onChange={event => this.emailHandler(event)}
            value={this.state.nameInputText} name="customer-name"/>
            </form>
        </div>
    )
}

}

export default Checkout;