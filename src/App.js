import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepages/homepage-component';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/shoppages/shop-component';
import Headers from './components/headers/header-component';
import SigninSignUp from './pages/signIn-signUp/signIn-signUp-component';



class App extends Component{
  render(){
  return (

    <div>
      <Headers />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={shopPage} />
      <Route  path='/signin' component={SigninSignUp} />
      </Switch>
    </div>

  );
}
}

export default App;
