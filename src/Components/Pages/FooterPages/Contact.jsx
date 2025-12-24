import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import styles from './footerpages.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.paragraph}>
          Have questions, feedback, or partnership inquiries? Feel free to email us at <a href="mailto:support@repromptsquest.com" style={{ color: '#ff4500' }}>support@repromptsquest.com</a>. We typically respond within 24-48 hours.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
