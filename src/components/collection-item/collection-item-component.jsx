import React from 'react';

import CustomButton from '../custom-button/custom-button-component';

import {connect} from 'react-redux';
import {Add_Item} from '../../redux/cart-toggle/cart.action';

import './collection-item-style.scss'

const CollectionItem = ({item, Add_Item}) =>{
    const {imageUrl, name, price} = item;
    return(
        <div className='collection-item'>
            <div 
            className='image'
            style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name} </span>
                <span className='price'>${price}</span>

            </div>
            <CustomButton onClick={()=>Add_Item(item)} inverted>Add to cart</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
    Add_Item: item=>dispatch(Add_Item(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);