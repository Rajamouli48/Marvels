


import Fashion from './Fashion';
import Airbuds from './Airbuds';
import Mobiles from './Mobiles';
import Laptop from './Laptop';
import Tv from './Tv';


export  function NavBar(props) {
  return (
    <div className='container1'>
      <div className='mobile'>
        <Mobiles/>
        </div>
        <div className='tv'>
        <Tv/>
        </div>
        <div className='laptop'>
        <Laptop/>
        </div>
        <div className='Fashion'>
        <Fashion/>
        </div>
        <div className='Airbuds'>
        <Airbuds/>
        </div>
    </div>
  );
}


// Airbuds.jsx
import React from 'react';
import { airbuds } from './data'; 

const Airbuds = () => {
  return (
    <div className='items'>
      {/* <h2 className='fornt'>Available Airbuds</h2> */}
      {airbuds.map((item) => {
        return (
          <div className='main' key={item.id}>
            <img src={item.image} alt={item.name} className='image' />
            <h3 className='name'>{item.name}</h3>
            <p className='cat'>Category: {item.category}</p>
            <p className='pri'>Price: ${item.price}</p>
            <button className='move'>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Airbuds;
