import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import styles from './footerpages.module.css';

const Terms = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <h1 className={styles.heading}>Terms & Conditions</h1>
        <p className={styles.paragraph}>
          By using RePromptsQuest, you agree to the following terms and conditions:
        </p>
        <ul className={styles.paragraph}>
          <li>• All content is provided for educational and informational purposes only.</li>
          <li>• You may not reproduce, redistribute, or commercially exploit any part of this website without explicit permission.</li>
          <li>• We do not provide any warranties or guarantees regarding the accuracy or completeness of content.</li>
          <li>• We reserve the right to modify or remove content, or update these terms at any time without prior notice.</li>
          <li>• Use of this site is at your own risk. We are not liable for any loss or damage arising from use of the platform.</li>
        </ul>
        <p className={styles.paragraph}>
          If you have questions about these terms, contact us at <a href="repromptsquest@gmail.com">support@repromptsquest.com</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
