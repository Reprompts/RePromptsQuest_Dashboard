import React, { useState } from 'react';
import styles from './opensource.module.css';
import Footer from '../../Footer/Footer';

// Import data sections
import ai from './data/ai';
import api from './data/api';
import libs from './data/libs';
import github from './data/github';

const categories = {
  ai,
  api,
  libs,
  github,
};

const OpenSource = () => {
  const [active, setActive] = useState('ai');

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
        <h1 className={styles.heading}>Open Source Projects</h1>

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
          {categories[active].projects.map((project, index) => (
            <div
              key={project.id || project.title}
              id={project.id || undefined}
              className={`${styles.card} ${colorClasses[index % colorClasses.length]}`}
            >
              <h2 className={styles.cardTitle}>
                {project.title}
                {project.highlight && (
                  <span className={styles.highlightBadge}>
                    {project.highlight}
                  </span>
                )}
              </h2>

              {project.creator && (
                <p className={styles.meta}>
                  <strong>Creator:</strong> {project.creator}
                </p>
              )}

              <p className={styles.cardDescription}>{project.description}</p>

              {project.tags && (
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.language && (
                <p className={styles.meta}>
                  <strong>Language:</strong> {project.language}
                </p>
              )}

              {project.license && (
                <p className={styles.meta}>
                  <strong>License:</strong> {project.license}
                </p>
              )}

              {project.level && (
                <p className={styles.meta}>
                  <strong>Level:</strong> {project.level}
                </p>
              )}

              {project.use_case && (
                <p className={styles.meta}>
                  <strong>Use Case:</strong> {project.use_case}
                </p>
              )}

              {project.quickstart && (
                <p className={styles.meta}>
                  <strong>Quickstart:</strong>{' '}
                  <code className={styles.code}>{project.quickstart}</code>
                </p>
              )}

              {project.reviews && project.reviews.length > 0 && (
                <div className={styles.reviews}>
                  <strong className={styles.reviewHeading}>Reviews:</strong>
                  <ul className={styles.reviewList}>
                    {project.reviews.map((review, idx) => (
                      <li key={idx} className={styles.reviewItem}>
                        “{review}”
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.links}>
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    className={styles.secondaryButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.link}
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OpenSource;
