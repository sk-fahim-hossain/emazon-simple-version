import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([fakeData]);
    const [cart, setCart] = useState([])


    const handleAddProduct = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
        console.log(product);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
              
                {
                    products[0].map(pd =><Products 
                        product={pd}
                        handleAddProduct={handleAddProduct}
                        ></Products>)
                }
                
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;