import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='tag'>
        <h1>Welcome to Our Product Store!</h1>
        <p>Select a category from the menu above to view products.</p>
        {/* <Link to="/Products">
          <button>View All Products</button>
        </Link> */}
      </div>
    </>
  );
}

export default Home;
