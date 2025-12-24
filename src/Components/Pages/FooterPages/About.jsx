import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import styles from './footerpages.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          RePromptsQuest is an initiative by open-source developers committed to building high-quality AI tools, tutorials, and real-world learning platforms. We aim to make education accessible and interactive for everyone, whether you're a beginner or a seasoned developer.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
