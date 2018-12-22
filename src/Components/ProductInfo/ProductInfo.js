import React from 'react';
import './ProductInfo.css';

const ProductInfo = ( { domain, catagory, productId, created } ) => {
     return (
         <div className="product-info">
         <h1>Product</h1>
            <ul className="product-info-content">
                <li>Domain Name: {domain}</li>
                <li>Catagory: {catagory}</li>
                <li>Product Id: {productId}</li>
            </ul>
         </div>
     )
}

export default ProductInfo;