

export const AddItemToCart = (cartItems, cartItemToAdd) =>{
    const existingItem = cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);

    if(existingItem){
        return cartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
             
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const REMOVEITEM = (cartItems, cartItemToRemove) =>{
    const existingItem = cartItems.find(cartItem=> cartItem.id === cartItemToRemove.id);

    if(existingItem.quantity === 1){
        return cartItems.filter(item=>item.id !==cartItemToRemove.id);
    }

    return cartItems.map(
        item=> item.id === cartItemToRemove.id ? {...item, quantity: item.quantity - 1 } 
        :
        item
        )
}