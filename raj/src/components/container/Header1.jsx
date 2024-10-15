import React from 'react';
import { Link } from 'react-router-dom';

export default function Header1() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/Tv">TV</Link></li>
          <li><Link to="/Mobiles">Mobiles</Link></li>
          <li><Link to="/Fashion">Fashion</Link></li>
          <li><Link to="/Laptop">Laptop</Link></li>
          <li><Link to="/Airbuds">Airbuds</Link></li>
          <li><Link to="/Products">All Products</Link></li>
        </ul>
      </nav>
    </header>
  );
}
