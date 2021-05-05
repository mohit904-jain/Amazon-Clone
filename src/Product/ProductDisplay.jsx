import React from "react";
import "./Product.css";

function ProductDisplay({ id, title, image, price, rating, addToBasket }) {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="start">
                &#11088;
              </span>
            ))}
        </div>
      </div>
      
      <button onClick=
        {() => addToBasket({ id, title, image, price, rating })}>
        Add
        to Basket
      </button>
    </div>
  );
}

export default ProductDisplay;
