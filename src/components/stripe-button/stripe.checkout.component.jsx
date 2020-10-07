import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51HZelUEr6rJkIQleSWGTtijDSUEozwr4pF432qf8YgrKtrzVd7cvTgniwdSysZ7mvEkEEGXxMm62H8sSNoYsFClO00VS3loavl';
    const onToken = (token) =>{
        console.log(token);
        alert('Payment Successfull')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='SIMPL Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={stripePrice}
            stripeKey={publishableKey}
            panelLabel='Pay Now'
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;