import React from 'react';
import { laptop } from './data';

const Laptop = () => {
  return (
    <>
    <div className='items'>
    <h1>Laptop's</h1>
      {laptop.map((item) => {
        return (
          <div className='main' key={item.id}>
            <img 
              src={item.image || 'https://via.placeholder.com/300'} 
              alt={item.name} 
              className='image' 
            />
            <h3 className='name'>{item.name}</h3>
            <p className='cat'>Category: {item.category}</p>
            <p className='pri'>Price: ${item.price}</p>
            
            {item.inStock ? (
              <p style={{ color: 'green' }}>In Stock</p>
            ) : (
              <p style={{ color: 'red' }}>Out of Stock</p>
            )}

            {item.price < 1000 ? (
              <span className='badge'>Budget-Friendly</span>
            ) : item.price > 50000 ? (
              <span className='badge'>Premium Product</span>
            ) : null}

            {item.discount && <p className='discount'>Discount Available!</p>}

            {item.price > 5000 && <p className='shipping'>Free Shipping</p>}

            {item.stock < 5 && <p className='low-stock'>Hurry, only {item.stock} items left!</p>}

            <button className='move'>Add to cart</button>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Laptop;