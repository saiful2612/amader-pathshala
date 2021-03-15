import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import { library } from '@fortawesome/fontawesome-svg-core';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10= fakeData.slice(0,10);
    const [products,setProducts]= useState(first10);

    const [cart, setCart] = useState([]);

    const handler = (product) => {
        const newCart=[...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-area">
            <div className="product-area">
                <ul>
                    {
                        products.map(pd => <Product handler={handler} product={pd}></Product>)

                    }   
                </ul>
            </div>

            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;