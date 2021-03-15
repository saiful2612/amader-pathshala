import { prettyDOM } from '@testing-library/dom';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total,prd) => total + prd.price, 0)


    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>=15){
        shipping=4.99
    }
    else if(total>0){
        shipping=12.99
    }

    const vat = total*0.1;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return precision
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered:{cart.length}</p>
            <p>Product price : {total}</p>
            <p><small>Shipping cost: {formatNumber(shipping)}</small></p>
            <p><small>VAT : {formatNumber(vat)}</small></p>
            <p>Price : {formatNumber(total + shipping + vat)}</p>
        </div>
    );
};

export default Cart;