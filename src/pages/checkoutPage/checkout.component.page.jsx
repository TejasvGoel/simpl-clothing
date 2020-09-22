import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal } from '../../redux/cart-toggle/cart.selectors';
import { selectCartItems } from '../../redux/cart-toggle/cart.selectors';

import CheckOut from '../../components/checkout-component/checkout-component';

import './checkout-styles.scss';

const CheckOutPage = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckOut  cartItem={cartItem} key={cartItem.id} />)
        }
        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>

        </div>
    </div>
);

const mapStateToPros = createStructuredSelector({
    cartTotal: selectCartTotal,
    cartItems: selectCartItems
})

export default connect(mapStateToPros, null)(CheckOutPage);