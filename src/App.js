import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepages/homepage-component';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/shoppages/shop-component';
import Headers from './components/headers/header-component';
import SigninSignUp from './pages/signIn-signUp/signIn-signUp-component';
import {auth} from './firebase/firebase-utils';





class App extends Component{
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null ;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  
  render(){
  return (

    <div>
      <Headers currentUser={this.state.currentUser}/>
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
