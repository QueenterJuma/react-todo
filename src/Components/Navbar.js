import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
];
const Navbar = () => (
  <nav className="navbar">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            to={link.path}
            style={({ isActive }) => ({
              color: isActive ? 'red' : undefined,
            })}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
