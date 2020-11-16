import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';


class App extends Component {
  render () {
    return (
      <Provider store={store}>
              <div className="pageContainer">

        <header>

        
              <div>
              <BrowserRouter>
              <Nav />
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/basket" component={Basket}/>
                    <Route exact path="/checkout" component= {Checkout}/>
                    <Route exact path="/login" component= {Login}/>
                    <Route exact path="/signup" component= {Signup}/>
                  </Switch>
              </BrowserRouter>
              </div>                    

        </header>

        </div>
      </Provider>



    )
  }
}
export default App;
