import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button-component';
import CartItem from '../cart-item/cart-item-component';

import './cart-dropdown-style.scss';

const CartDropDown = ({cartItems}) =>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'> 
            {
                cartItems.map(item=>{
                    return(
                        <CartItem key={item.id} item={item} />
                    )
                })
            }
             </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    );
}
const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps, null)(CartDropDown);