import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, prd) => total+prd.price ,0)

    let shipping = 0;
    if(total < 15){
        shipping = 12.99;
    }
    else if(total < 25){
        shipping = 4.99;
    }

    const tax = total / 10 ;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const grandTotal = total + tax + shipping ;
    return (
        <div>
            <h3>order summery:{cart.length}</h3>
            <p>tax : {formatNumber(tax)}</p>
            <h3>Product Price{formatNumber(total)}</h3>
            <h3><small>Shipping:{shipping}</small></h3>
            <h3>Grand Total:{formatNumber(grandTotal)}</h3>
        </div>
    );
};

export default Cart;