import React, { useState } from 'react';
import styles from './technews.module.css';
import Footer from '../../Footer/Footer';

// Import each category's data
import programming from './data/programming';
import aiProgramming from './data/ai_programming';
import webMobile from './data/web_mobile';
import cloudDevops from './data/cloud_devops';
import security from './data/security';
import hardware from './data/hardware';
import recentNews from './data/recent';

const sections = {
  recent: {
    label: '🕒 Recent News',
    data: [...recentNews].sort((a, b) => b.id - a.id),
  },
  programming: {
    label: '👨‍💻 Programming',
    data: programming,
  },
  ai: {
    label: '🧠 AI & Programming',
    data: aiProgramming,
  },
  web: {
    label: '💻 Web & Mobile Development',
    data: webMobile,
  },
  cloud: {
    label: '☁️ Cloud, DevOps & Tools',
    data: cloudDevops,
  },
  security: {
    label: '🛡️ Security & Privacy',
    data: security,
  },
  hardware: {
    label: '📱 Hardware & Tech Business',
    data: hardware,
  },
  all: {
    label: '🗂️ All News',
    data: null,
  },
};

const TechNews = () => {
  const [view, setView] = useState('recent');

  const colorClasses = [
    styles.color1,
    styles.color2,
    styles.color3,
    styles.color4,
    styles.color5,
    styles.color6,
  ];

  const renderCard = (item, keyIndex) => (
    <div
      key={`${item.title}-${item.source || 'src'}-${keyIndex}`}
      className={`${styles.card} ${colorClasses[keyIndex % colorClasses.length]}`}
    >
      <h2 className={styles.cardTitle}>{item.title}</h2>

      <p className={styles.cardDescription}>{item.description}</p>

      {item.image && (
        <img src={item.image} alt={item.title} className={styles.cardImage} />
      )}

      <div className={styles.meta}>
        {item.source && <p><strong>Source:</strong> {item.source}</p>}
        {item.time && <p><strong>Published:</strong> {new Date(item.time).toLocaleDateString()}</p>}
        {item.reading_time && <p><strong>Read Time:</strong> {item.reading_time}</p>}
      </div>

      {item.tags && (
        <div className={styles.tags}>
          {item.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Visit
        </a>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <h1 className={styles.heading}>Tech News</h1>

        <div className={styles.toggleContainer}>
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={view === key ? styles.active : ''}
            >
              {section.label}
            </button>
          ))}
        </div>

        {view !== 'all' ? (
          <div className={styles.grid}>
            {[...sections[view].data]
              .sort((a, b) => b.id - a.id)
              .map((item, index) => renderCard(item, index))}
          </div>
        ) : (
          <>
            {Object.entries(sections)
              .filter(([key]) => key !== 'recent' && key !== 'all')
              .map(([key, section]) => (
                <div key={key}>
                  <h2 className={styles.cardTitle}>{section.label}</h2>
                  <div className={styles.grid}>
                    {[...section.data]
                      .sort((a, b) => b.id - a.id)
                      .map((item, index) =>
                        renderCard(item, `${key}-${index}`.length))}
                  </div>
                </div>
              ))}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TechNews;
