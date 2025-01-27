import React from 'react';
import notFoundImage from '../images/404.webp';
import styles from './NotFound.module.css'; // Importing the CSS module

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.notFoundContainer}>
        <img 
          src={notFoundImage} 
          alt="Lost" 
          className={styles.notFoundImage} 
        />
        <div className={styles.notFoundText}>
          <h1 className={styles.wobblyFont}>
            <span className={styles.errorText}>Error</span> 
            <span className={styles.codeText}> 404</span>
          </h1>
          <p className={styles.paragraphStyle}><b>Oops! Looks like you’ve taken a wrong turn.</b></p>
          <p className={styles.paragraphStyle}><b>You need to go back</b></p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.bigButton}>Go to Home</a>
        <a href="/products" className={styles.bigButton}>View Products</a>
        <a href="/cart" className={styles.bigButton}>Visit your Cart</a>
      </div>
    </div>
  );
};

export default NotFound;
