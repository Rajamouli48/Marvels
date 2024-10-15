import React from 'react';

const ProductDetails = ({ product, setSelectedProduct }) => {
  return (
    <div className="product-details">
      <button onClick={() => setSelectedProduct(null)}>Back to Products</button>
      <img
        src={product.image || 'https://via.placeholder.com/300'}
        alt={product.name}
        className="product-image"
      />
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      {product.inStock ? (
        <p style={{ color: 'green' }}>In Stock</p>
      ) : (
        <p style={{ color: 'red' }}>Out of Stock</p>
      )}
      {product.discount && <p>Discount Available!</p>}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
