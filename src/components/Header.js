import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Dr. A. P. J. Abdul Kalam</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Biography</Link>
          </li>
          <li>
            <Link to="/achievements">Achievements</Link>
          </li>
          <li>
            <Link to="/photos">Quotes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;