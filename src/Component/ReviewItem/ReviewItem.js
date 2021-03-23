import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    
    const {name, quantity,key,price} = props.product;
    return (
        <div className="Review-item">
            <h3 className="product-name">{name}</h3>
            <p>Quantity: <b> {quantity} </b> </p>
            <p><small>${price}</small></p>
            <br/>
            <button 
                onClick={() =>props.removeProduct(key)}
                className="main-btn"
                >Remove Item</button>
        </div>
    );
};

export default ReviewItem;