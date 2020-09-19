import ToggleHidden from './cart.types';

import {AddItemToCart} from './cart.util';


const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case ToggleHidden.TOGGLEHIDDEN:
            return{
                ...state,
                hidden: !state.hidden

            }
        case ToggleHidden.ADD_ITEM:
            return{
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }

}

export default cartReducer;
