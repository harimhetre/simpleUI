import React from 'react';
import './Product.css';

const Product = ({imageUrl, price}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt="jbl"/>
            <h1>{price}</h1>
            <button className="myButton">Buy</button>
        </div>
    )
}

export default Product;