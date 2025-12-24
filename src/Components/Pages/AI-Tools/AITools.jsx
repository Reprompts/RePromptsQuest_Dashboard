import React from 'react';
import styles from './aitools.module.css';
import tools from './data/tools';
import Footer from '../../Footer/Footer';

const AITools = () => {
  const handleVisit = (link) => {
    if (link) {
      const validUrl = link.startsWith('http') ? link : `http://${link}`;
      window.open(validUrl, '_blank');
    }
  };

  const colorClasses = [
    styles.color1,
    styles.color2,
    styles.color3,
    styles.color4,
    styles.color5,
    styles.color6,
  ];

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <h1 className={styles.heading}>Our Services</h1>
        <div className={styles.grid}>
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`${styles.card} ${colorClasses[index % colorClasses.length]}`}
            >
              <h2 className={styles.cardTitle}>{tool.title}</h2>
              <p className={styles.cardDescription}>{tool.description}</p>
              <button
                className={styles.button}
                onClick={() => handleVisit(tool.link)}
                disabled={!tool.link}
              >
                Visit
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AITools;
