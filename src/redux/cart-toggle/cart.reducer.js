
import ToggleHidden from './cart.types';

import { AddItemToCart, REMOVEITEM } from './cart.util';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToggleHidden.TOGGLEHIDDEN:
            return {
                ...state,
                hidden: !state.hidden

            };

        case ToggleHidden.ADD_ITEM:
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            };

        case ToggleHidden.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        case ToggleHidden.REMOVE_ITEM:
            return {
                ...state,
                cartItems: REMOVEITEM(state.cartItems, action.payload)
            };
        default:
            return state;
    }

}

export default cartReducer;
