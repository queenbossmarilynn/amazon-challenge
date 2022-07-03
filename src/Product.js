import React from 'react';
import "./Product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
        <div className="product_info">
            <p>The Lean Startup</p>
            <p className="product_price">
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product_rating">
            <p>star</p>
            <p>star</p>
            <p>star</p>
            </div>
        </div>

        <img src="http://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt=""
        />

        <button>Add to Basket</button>
    </div>
  );
}

export default Product;