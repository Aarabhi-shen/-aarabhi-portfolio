import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/kaira-posters', label: 'KAIRA POSTERS' },
    { to: '/eco-club', label: 'Graphic Design Portfolio' },
    { to: '/art', label: 'My Art Gallery' }
  ];

  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
