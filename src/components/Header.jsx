import React from 'react';
import { ReactComponent as SiteIcon } from '../assets/logo.svg';
import styles from './Header.module.css';


function Header() {
  return (
    <div className={styles.flex}>
        <SiteIcon alt="Minimal Sites Icon" className={styles.icon}/>
        <span>Webp Converter</span>
    </div>
  )
}

export default Header