import ToggleHidden from './cart.types';

export const HiddenDropdown = () => ({
    type:ToggleHidden.TOGGLEHIDDEN
});

export const Add_Item = item =>({
    type:ToggleHidden.ADD_ITEM,
    payload:item
});

