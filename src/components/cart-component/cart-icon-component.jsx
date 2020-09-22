import React from 'react';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg'

import { connect } from 'react-redux';
import { HiddenDropdown } from '../../redux/cart-toggle/cart.action';
import {selectCartItemsCount} from '../../redux/cart-toggle/cart.selectors';

import './cart-component-style.scss';

const CartIcon = ({ HiddenDropdown, itemCount }) =>{
    return(
        <div className='cart-icon' onClick={HiddenDropdown}>
            <ShoppingIcon  className='shopping-icon'/>
            <span className='item-count'> {itemCount} </span>

        </div>
    );
}

const mapStateToProps = state =>({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch =>({
 HiddenDropdown: () => dispatch(HiddenDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);