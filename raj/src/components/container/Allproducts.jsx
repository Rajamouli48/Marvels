import React from 'react';
import { tv, fashion, airbuds, laptop, mobiles } from './data'; 
import'./Allproducts.css'

function Products() {
    // Combine all products into a single array
    const allProducts = [...tv, ...fashion, ...airbuds, ...laptop, ...mobiles];

    return (
        <div className="all-products">
            <h1>All Products</h1>
            <div className="products-grid">
                {allProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p className="price">Price: ${product.price.toFixed(2)}</p>
                        <p className="stock">
                            {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                        </p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
