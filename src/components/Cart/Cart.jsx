import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
//    const cart = props.cart; Option 1
    //   const {cart} = props; Option 2
    let total = 0;
    let totalShipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
        tax =  (total * 0.07);
        grandTotal = total + totalShipping + tax;
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;