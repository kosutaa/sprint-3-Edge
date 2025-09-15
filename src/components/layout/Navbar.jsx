import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const activeLinkStyle = {
    color: '#E5989B' 
  };

  return (
    <header className="bg-plum-purple shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          Passa a Bola
        </NavLink>
        
        <div className="flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-lg">
            <li>
              <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-white hover:text-delicate-lilac transition-colors">Home</NavLink>
            </li>
            <li>
              <NavLink to="/partidas" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-white hover:text-delicate-lilac transition-colors">Partidas</NavLink>
            </li>
            <li>
              <NavLink to="/comunidade" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-white hover:text-delicate-lilac transition-colors">Comunidade</NavLink>
            </li>
          </ul>

          <Link to="/login" className="text-white hover:text-delicate-lilac transition-colors" title="Login / Perfil">
            <UserCircleIcon className="h-8 w-8" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;