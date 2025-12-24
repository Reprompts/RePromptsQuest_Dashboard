import React, { useState } from 'react';
import styles from './tutorials.module.css';
import Footer from '../../Footer/Footer';

// Import all data files
import cs from './data/cs';
import programming from './data/programming';
import ai from './data/ai';
import placements from './data/placements';
import roadmaps from './data/roadmaps';
import python from './data/python';
import mathematics from './data/mathematics';

const categories = {
  cs,
  programming,
  ai,
  placements,
  roadmaps,
  python,
  mathematics,
};

const Tutorials = () => {
  const [active, setActive] = useState('cs');

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
        <h1 className={styles.heading}>Tutorials</h1>

        <div className={styles.toggleContainer}>
          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={active === key ? styles.active : ''}
            >
              {value.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {categories[active].tutorials.map((tutorial, index) => (
            <div
              key={index}
              className={`${styles.card} ${colorClasses[index % colorClasses.length]}`}
            >
              <h2 className={styles.cardTitle}>{tutorial.title}</h2>
              <p className={styles.cardDescription}>{tutorial.description}</p>
              <a
                href={tutorial.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
