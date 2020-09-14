import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepages/homepage-component';
import { Route, Switch } from 'react-router-dom';
import shopPage from './pages/shoppages/shop-component';
import Headers from './components/headers/header-component';
import SigninSignUp from './pages/signIn-signUp/signIn-signUp-component';
import { auth, createUserProfile } from './firebase/firebase-utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';





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
          <Route path='/signin' component={SigninSignUp} />
        </Switch>

      </div>

    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(null, mapDispatchToProps )(App);
