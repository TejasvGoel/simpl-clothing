import React from 'react';
import SignIn from '../../components/Sign-In/sign-in-component';
import './signIn-signup-style.scss';
import SignUp from '../../components/sign-up/sign-up-component';

const SigninSignUp = () =>{
    return(
        <div className='signin-signup'>
       <SignIn />
       <SignUp />
       </div>
    );
}

export default SigninSignUp;