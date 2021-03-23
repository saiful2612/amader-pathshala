import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImages from '../../images/giphy.gif' ;

const Review = () => {
    const [cart, setCart] =useState([]);
    const [orderPlace,setorderPlace]=useState(false);

    const handleOrder = () =>{
        setCart([]);
        setorderPlace(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        
        const newCart = cart.filter(pd => pd.key !==productKey);
        // console.log(newCart)
        setCart(newCart)
        removeFromDatabaseCart(productKey);
    }

    useEffect( () =>{
        const savedCart= getDatabaseCart();
        // console.log(savedCart)
        const productKeys = Object.keys(savedCart);
        // console.log(productKeys)
        const count = productKeys.map( key => savedCart[key]);
        // console.log(count)
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key ===key);
            product.quantity= savedCart[key];
            return product;
        });
        setCart(cartProducts);
        
    },[])

    let thankYou;
    if(orderPlace){
        thankYou = <img src={happyImages}/>;
    }

    return (
        <div className="Twin-area">
            <div className="product-area">
                {
                    cart.map(pd => <ReviewItem
                        removeProduct={removeProduct}
                        product={pd}></ReviewItem>)
                }   
                {
                    thankYou
                }
            </div>

            <div className="shop-area">
                <Cart cart={cart}>
                    <button onClick={handleOrder} className="main-btn"> Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;