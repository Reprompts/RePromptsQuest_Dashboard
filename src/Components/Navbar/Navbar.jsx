import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/tutorials', label: 'Tutorials' },
    { path: '/open-source', label: 'Open Source' },
    // { path: '/tech-news', label: 'Tech News' },
    { path: '/anti-karma', label: 'Anti-Karma' },
  ];

  return (
    <header className={styles.navbarWrapper}>
      {/* Top row: Logo and Login */}
      <div className={styles.topBar}>
        <Link to="/" className={styles.logo}>RePromptsQuest</Link>
        <Link to="/login" className={styles.loginButtonWrapper}>
          <button className={styles.redButton}>sign-in</button>
        </Link>
      </div>

      {/* Second row: Nav links */}
      <nav className={styles.scrollNav}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.navItem} ${activePath === link.path ? styles.active : ''}`}
            onClick={() => setActivePath(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
