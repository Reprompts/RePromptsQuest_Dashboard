import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brand}>RePromptsQuest</div>

        <nav className={styles.navLinks}>
    <Link to="/about">About Us</Link>
    <Link to="/privacy">Privacy Policy</Link>
    <Link to="/terms">Terms & Conditions</Link>
    <Link to="/contact">Contact Us</Link>
        </nav>
      </div>

      <div className={styles.bottomSection}>
        <p>© {new Date().getFullYear()} RePromptsQuest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
