import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import styles from './footerpages.module.css';

const Privacy = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.paragraph}>
          At RePromptsQuest, we value your privacy and are committed to protecting your personal information.
        </p>
        <p className={styles.paragraph}>
          We do <strong>not collect personal information</strong> unless you explicitly provide it—such as through forms, newsletter sign-ups, or interactive tools.
        </p>
        <p className={styles.paragraph}>
          We use standard <strong>cookies</strong> to enable core functionality and gather anonymous analytics to improve our services. These cookies do not track personal identity.
        </p>
        <p className={styles.paragraph}>
          Your data is <strong>never sold, rented, or shared</strong> with third parties. All usage insights are aggregated and anonymized.
        </p>
        <p className={styles.paragraph}>
          If you ever wish to <strong>view, update, or delete</strong> any data you've shared with us, you can contact us directly, and we’ll respond promptly.
        </p>
        <p className={styles.paragraph}>
          We comply with applicable data protection laws and are committed to keeping your information secure.
        </p>
        <p className={styles.paragraph}>
          For any privacy-related questions or concerns, feel free to reach us at <a href="repromptsquest@gmail.com">support@repromptsquest.com</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
