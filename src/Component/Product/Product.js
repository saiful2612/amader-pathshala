import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, fafacebookf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,price,img,seller,key} =props.product;
    return (
        <div className="product-portion">
            <div>
                <img src={img}/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p> <small>By: {seller} </small> </p>
                <h5>Price:${price}</h5>
                { props.showAddToCart && <button 
                    className="main-btn"
                    onClick= {()=>props.handler(props.product)}
                    >
                <FontAwesomeIcon icon={faShoppingCart} /> Add me cart</button>

                }
            </div>
        </div>
    );
};

export default Product;