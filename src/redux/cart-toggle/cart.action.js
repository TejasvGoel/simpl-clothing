import ToggleHidden from './cart.types';

export const HiddenDropdown = () => ({
    type:ToggleHidden.TOGGLEHIDDEN
});

export const Add_Item = item =>({
    type:ToggleHidden.ADD_ITEM,
    payload:item
});

export const CLEAR_ITEM_FROM_CART = item =>({
    type:ToggleHidden.CLEAR_ITEM_FROM_CART,
    payload:item
});


export const REMOVE_ITEM = item =>({
    type:ToggleHidden.REMOVE_ITEM,
    payload:item
});

