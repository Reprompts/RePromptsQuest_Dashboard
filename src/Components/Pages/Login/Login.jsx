import React from 'react';
import styles from './login.module.css';
import Footer from '../../Footer/Footer';

const Login = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Welcome to RePromptsQuest</h1>

          <form className={styles.form}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} placeholder="you@example.com" required />

            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} placeholder="••••••••" required />

            <button type="submit" className={styles.loginButton}>Login</button>
          </form>

          <div className={styles.divider}><span>OR</span></div>

          <div className={styles.socialLogins}>
            <button className={`${styles.socialButton} ${styles.google}`}>
              <img src="/icons/google.svg" alt="Google" className={styles.icon} />
              Login with Google
            </button>
            <button className={`${styles.socialButton} ${styles.github}`}>
              <img src="/icons/github.svg" alt="GitHub" className={styles.icon} />
              Login with GitHub
            </button>
          </div>

          <p className={styles.register}>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
