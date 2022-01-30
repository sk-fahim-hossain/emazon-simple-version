import React from 'react';
import './Products.css'

const Products = (props) => {

    const {name,img,stock,seller,price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>{seller}</small></p>
                <br />
                <p>price:${price}</p>
                <p>Only {stock} left order soon</p>
                <button className="main-button" onClick={()=> props.handleAddProduct(props.product)}>Add To Cart</button>
            </div>
        </div>

    );
};

export default Products;