import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.actions';



import './App.css';

import HomePage from './pages/homepages/homepage-component';
import shopPage from './pages/shoppages/shop-component';
import SigninSignUp from './pages/signIn-signUp/signIn-signUp-component';
import CheckOutPage from './pages/checkoutPage/checkout.component.page';



import Headers from './components/headers/header-component';

import { auth, createUserProfile } from './firebase/firebase-utils';







class App extends Component {
 

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        });
      }

      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {
    return (

      <div>

        <Headers/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={shopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route  exact path='/signin' 
          render={()=>this.props.currentUser ? 
          (<Redirect to='/' />)
           : (<SigninSignUp />)  } />
        </Switch>

      </div>

    );
  }
} 

const mapStateToProps = ({user}) =>({ currentUser: user.currentUser })

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(mapStateToProps, mapDispatchToProps )(App);
