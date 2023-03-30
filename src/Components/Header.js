import React from 'react';
import '../Style/Header.module.css';

const Header = () => (
  <header>
    <h1 className="title">todos</h1>
    <p className="para">Items will persist in the browser local storage</p>
  </header>
);
export default Header;
