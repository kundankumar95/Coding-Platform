import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import notification from '../assets/image(2).png';
import user from '../assets/image(1).png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link style={{textDecoration: 'none' }} to="/" className="logo">Logo</Link>
        <Link style={{textDecoration: 'none' }} to="/explore" className="nav-item">Explore</Link>
        <Link style={{textDecoration: 'none' }} to="/problems" className="nav-item">Problems</Link>
        <Link style={{textDecoration: 'none' }} to="/contest" className="nav-item">Contest</Link>
        <Link style={{textDecoration: 'none' }} to="/discuss" className="nav-item">Discuss</Link>
        <div className="nav-item dropdown">
          <span>Interview</span>
          <div className="dropdown-content">
            <Link style={{textDecoration: 'none' }} to="/interview/online">Online Interview</Link>
            <Link style={{textDecoration: 'none' }} to="/interview/assessment">Assessment</Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <span>Store</span>
          <div className="dropdown-content">
            <Link style={{textDecoration: 'none' }} to="/store/redeem">Redeem</Link>
            <Link style={{textDecoration: 'none' }} to="/store/premium">Premium</Link>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <img src={notification} alt="Notifications" className="icon" />
        <img src={user} alt="User" className="icon" />
        <Link style={{textDecoration: 'none' }} to="/premium" className="premium-btn">Premium</Link>
      </div>
    </nav>
  );
};

export default Navbar;

