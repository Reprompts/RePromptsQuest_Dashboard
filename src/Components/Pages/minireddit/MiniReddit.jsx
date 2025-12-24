import React, { useState } from 'react';
import styles from './minireddit.module.css';
import Footer from '../../Footer/Footer';

// Data imports
import recent from './data/recent';
import ourPosts from './data/ourPosts';
import ourCommunities from './data/ourCommunities';
import learnReddit from './data/learnReddit';
import techStats from './data/techStats';
import techPosts from './data/techPosts';

// New SEO-friendly data sections
import topQuestions from './data/topQuestions';
import memes from './data/memes';
import lifeAdvice from './data/lifeAdvice';
import mysteries from './data/mysteries';
import career from './data/career';

const sections = {
  recent: { label: '🕒 Recent Posts', posts: recent },
  ourPosts: { label: '✍️ Our Posts', posts: ourPosts },
  community: { label: '🌐 Our Subreddits', posts: ourCommunities },
  learn: { label: '📘 Learn Reddit', posts: learnReddit },
  tech: { label: '🚀 Reddit Stats', posts: techStats },
  improve: { label: '💡 Tech Posts', posts: techPosts },
  topQuestions: { label: '🧠 Top Reddit Questions', posts: topQuestions },
  memes: { label: '😂 Memes & Humor', posts: memes },
  lifeAdvice: { label: '💬 Life Advice', posts: lifeAdvice },
  mysteries: { label: '🔍 Reddit Mysteries', posts: mysteries },
  career: { label: '💼 Career & Money', posts: career },
};

const allPosts = Object.values(sections)
  .flatMap((section) => section.posts)
  .sort((a, b) => new Date(b.time) - new Date(a.time));

const MiniReddit = () => {
  const [active, setActive] = useState('recent');
  const postsToShow = active === 'all' ? allPosts : sections[active].posts;

  const colorClasses = [
    styles.color1,
    styles.color2,
    styles.color3,
    styles.color4,
    styles.color5,
    styles.color6,
  ];

  const handleVisit = (link) => {
    if (link) window.open(link, '_blank');
  };

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <h1 className={styles.mainTitle}>Anti-Karma</h1>

        <div className={styles.toggleContainer}>
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={active === key ? styles.active : ''}
            >
              {section.label}
            </button>
          ))}
          <button
            onClick={() => setActive('all')}
            className={active === 'all' ? styles.active : ''}
          >
            🗂️ All Posts
          </button>
        </div>

        <div className={styles.grid}>
          {postsToShow.map((post, idx) => (
            <div
              key={post.id || idx}
              className={`${styles.card} ${colorClasses[idx % colorClasses.length]}`}
            >
              <h3 className={styles.cardTitle}>{post.title}</h3>

              {post.summary && (
                <p className={styles.cardSummary}><em>{post.summary}</em></p>
              )}

              {post.subreddit && post.user && (
                <p className={styles.meta}>
                  <strong>{post.subreddit}</strong> • {post.user}
                </p>
              )}

              {post.time && (
                <p className={styles.meta}>
                  <strong>Posted:</strong> {new Date(post.time).toLocaleString()}
                </p>
              )}

              {post.type && (
                <p className={styles.meta}>
                  <strong>Type:</strong> {post.type}
                </p>
              )}

              {post.reason && (
                <p className={styles.meta}>
                  <strong>Why:</strong> {post.reason}
                </p>
              )}

              <p className={styles.cardDescription}>{post.description}</p>

              <button
                className={styles.button}
                onClick={() => handleVisit(post.link)}
                disabled={!post.link}
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

export default MiniReddit;
