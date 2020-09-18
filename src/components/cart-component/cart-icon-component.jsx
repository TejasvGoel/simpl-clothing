import React from 'react';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg'

import { connect } from 'react-redux';
import { HiddenDropdown } from '../../redux/cart-toggle/cart.action';

import './cart-component-style.scss';

const CartIcon = ({ HiddenDropdown }) =>{
    return(
        <div className='cart-icon' onClick={HiddenDropdown}>
            <ShoppingIcon  className='shopping-icon'/>
            <span className='item-count'> 0 </span>

        </div>
    );
}

const mapDispatchToProps = dispatch =>({
 HiddenDropdown: () => dispatch(HiddenDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);