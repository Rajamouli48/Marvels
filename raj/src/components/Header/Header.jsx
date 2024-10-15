import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

export default function Header() {
  return (
    <header>
      <div className="header">
        <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo" />
        <nav>
          <ul className="navBar">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Airbuds'>Airbuds</Link>
            </li>
            <li>
              <Link to='/Fashion'>Fashion</Link>
            </li>
            <li>
              <Link to='/Laptop'>Laptop</Link>
            </li>
            <li>
              <Link to='/Mobiles'>Mobiles</Link>
            </li>
            <li>
              <Link to='/Tv'>TV</Link>
            </li>
            <li>
              <Link to='/Products'> All Products</Link> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
