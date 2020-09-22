import React from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button-component';
import CartItem from '../cart-item/cart-item-component';
import{selectCartItems} from '../../redux/cart-toggle/cart.selectors';

import {HiddenDropdown} from '../../redux/cart-toggle/cart.action';

import './cart-dropdown-style.scss';

const CartDropDown = ({cartItems, history, HiddenDropdown}) =>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'> 
            {
                cartItems.length ? (
                cartItems.map(item=>{
                    return(
                        <CartItem key={item.id} item={item} />
                    )
                }) ) :
                (<span className='empty-message'> Your cart is empty</span>)
            }
             </div>
             <div onClick={HiddenDropdown}>
            <CustomButton onClick={() => history.push('/checkout')}> Go To Checkout </CustomButton>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch =>({
    HiddenDropdown:() => dispatch(HiddenDropdown())
})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));