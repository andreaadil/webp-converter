import React from 'react';
import styles from './Body.module.css';
import Form from './parts/Form';
import {FaCogs} from 'react-icons/fa';
import {FaCloudDownloadAlt} from 'react-icons/fa';
import imagePreview from '../assets/example-image.png';

function Body() {
  return (
    <div className={styles.flex}>
        <div className={styles.col1}>
          <h1 className="title">Make your website run faster.</h1>
          <p className="body">Use this tool to convert your images to webp, reducing their file size so your website can run at peak performance.</p>
          <Form />
        </div>
        <div className={styles.col2}>
          <div>
            <img src={imagePreview} alt="" />
            <button type="submit" form="originalImage" className={styles.convertButton}>
              <FaCogs /> Convert to Webp
            </button>
            <button type="submit" form="originalImage" className={styles.downloadButton}>
              <FaCloudDownloadAlt /> Download Image
            </button>
          </div>
          
        </div>
    </div>
  )
}

export default Body