import { prettyDOM } from '@testing-library/dom';
import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce( (total,prd) => total + prd.price, 0)
    let total=0;
    for (let i =0; i< cart.length; i++){
        const product = cart[i];
        total=total + product.price * product.quantity;

      }


    let shipping=0;
    if(total>35){
        shipping=1.00;
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
            <p>Product price : {formatNumber(total)}</p>
            <p><small>Shipping cost: {formatNumber(shipping)}</small></p>
            <p><small>VAT : {formatNumber(vat)}</small></p>
            <p>Price : {formatNumber(total + shipping + vat)}</p>
            <br/>
            {
                props.children
            }

        </div>
    );
};

export default Cart;