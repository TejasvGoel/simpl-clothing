import React from 'react';

//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart-toggle/cart.selectors';

import { auth } from '../../firebase/firebase-utils';


import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-component/cart-icon-component';
import CartDropDown from '../cart-dropdown/cart-dropdown-component';


import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink, OptionsDiv } from './header.styles';


const Headers = ({ currentUser, hidden }) => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionsLink to='/shop'>
                    SHOP
            </OptionsLink>
                <OptionsLink to='/shop'>
                    CONTACTS
            </OptionsLink>

                {currentUser ?
                    <OptionsLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                </OptionsLink>
                    :
                    <OptionsLink to='/signin'>SIGN IN</OptionsLink>

                }

                <CartIcon />

            </OptionsContainer>
            {
                hidden ? null :
                    <CartDropDown />
            }
        </HeaderContainer>
    );


}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Headers);