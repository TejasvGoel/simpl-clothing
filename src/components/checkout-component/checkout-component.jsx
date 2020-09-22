import React from 'react';

import './checkout-style.scss';

import {connect } from 'react-redux';
import {CLEAR_ITEM_FROM_CART, Add_Item, REMOVE_ITEM} from '../../redux/cart-toggle/cart.action';


const CheckOut = ({ cartItem, clearItem, incItem, decItem }) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() =>decItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() =>incItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearItem(cartItem)}>
            &#10005;
        </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(CLEAR_ITEM_FROM_CART(item)),
    decItem: item => dispatch(REMOVE_ITEM(item)),
    incItem: item => dispatch(Add_Item(item))
});

export default connect(null, mapDispatchToProps)(CheckOut);