import React, { Component } from 'react';
import Nav from './components/Nav';
import Homepage from './components/Homepage'
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  render () {
    return (

      <div>

        <div className="title">
            <h1>Jidi Electronics</h1>        

        <div className="NavigationBar">

          <BrowserRouter>
            <Nav />
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/basket" component={Basket}/>
                <Route exact path="checkout" component= {Checkout}/>
              </Switch>
          </BrowserRouter>

        </div>

        </div>

      </div>
    )
  }
}
export default App;
