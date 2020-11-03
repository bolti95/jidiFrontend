import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  render () {
    return (

      <div className="pageContainer">

                  <header>
   
                   
                        <div>
                        <BrowserRouter>
                        <Nav />
                            <Switch>
                              <Route exact path="/" component={Home}/>
                              <Route exact path="/basket" component={Basket}/>
                              <Route exact path="checkout" component= {Checkout}/>
                            </Switch>
                        </BrowserRouter>
                        </div>                    

              </header>

    </div>


    )
  }
}
export default App;
