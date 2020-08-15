import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepages/homepage-component';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/shoppages/shop-component';



class App extends Component{

  render(){
  return (

    <div >
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={shopPage} />
      </Switch>
    </div>

  );
}
}

export default App;
