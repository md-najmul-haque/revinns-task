import React from 'react';

const ProductCard = ({ product, handleId }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
            <figure><img src={product.img} alt="product-img" /></figure>
            <div className="card-body">
                <h2 className="card-title">Description: {product.description}</h2>
                <div className="card-actions justify-end">
                    <button onClick={() => handleId(product)} className="btn btn-natural">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;