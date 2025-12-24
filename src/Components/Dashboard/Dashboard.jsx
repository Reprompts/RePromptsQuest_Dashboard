import React from 'react';
import styles from './dashboard.module.css';
import logo from './assets/RePromptsQuest.png';
import Footer from '../Footer/Footer';

// Importing data sections
import topProducts from './data/topProducts';
import topTutorials from './data/topTutorials';
// import topNews from './data/topNews';
import redditGuides from './data/redditGuides';
import onlinePresence from './data/onlinePresence';

const Dashboard = () => {
  const sections = [topProducts, topTutorials, redditGuides, onlinePresence];

  // Define color classes to rotate
  const colorClasses = [
    styles.cardColor1,
    styles.cardColor2,
    styles.cardColor3,
    styles.cardColor4,
    styles.cardColor5,
    styles.cardColor6,
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="RePromptsQuest Logo" className={styles.logo} />
        <h1 className={styles.title}>RePromptsQuest</h1>
        <p className={styles.description}>
          Welcome to <span className={styles.highlight}>RePromptsQuest</span>, a growing community dedicated to empowering learners and creators.
          We provide a range of services including <span className={styles.highlight}>tech news</span>,
          <span className={styles.highlight}>Reddit guides</span>,
          <span className={styles.highlight}>developer tutorials</span>,
          <span className={styles.highlight}>AI-powered tools</span>, and much more.
          <br />
          We're also active on Reddit, managing the subreddits
          <span className={styles.highlight}> r/becomeaiexpert</span> and
          <span className={styles.highlight}> r/EnlightenedMe</span>, operated via our shared handle
          <span className={styles.highlight}>u/OkAccess6128</span>.
        </p>
      </header>

      <div className={styles.content}>
        {sections.map((section, i) => (
          <section key={i} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.grid}>
              {section.cards.map((card, j) => {
                const colorClass = colorClasses[j % colorClasses.length];
                return (
                  <div className={`${styles.card} ${colorClass}`} key={j}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                    <a
                      href={card.link}
                      className={styles.button}
                    >
                      Visit
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
