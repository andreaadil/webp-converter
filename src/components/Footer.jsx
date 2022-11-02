import React from 'react';
import styles from './Footer.module.css';

const currentYear = () => {
    const d = new Date();
    const year = d.getFullYear();
    return year;
}

function Footer() {
  return (
    <div className={styles.block}>
        <p className={styles.copy}>Copyright &copy; {currentYear()} Minimal Sites</p>
    </div>
  )
}

export default Footer