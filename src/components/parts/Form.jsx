import React from 'react';
import styles from './Form.module.css';
import {FaCloudUploadAlt} from 'react-icons/fa';

function Form() {
  return (
    <form id="originalImage" className={styles.form}>
        {/* Image Upload */}
        <div className={styles.imageUpload}>
            <label htmlFor="fileUpload" className={styles.fileUpload}>
                <FaCloudUploadAlt /> Upload Image</label>
            <p className={styles.info}>
                Accepted file types: jpg, jpeg, png
            </p>
            <input
                type='file'
                id='fileUpload'
                max='1'
                accept='.jpg,.png,.jpeg'
                required
            />
        </div>
        
        {/* Image Quality */}
        <fieldset className={styles.radioGroup}>
            <legend className={styles.legend}>Select image quality:</legend>
                <div>
                    <input
                        type="radio"
                        id="50"
                        name="quality"
                        value="50"
                        required
                    />
                    <label htmlFor="50">50%</label>
                    <input
                        type="radio"
                        id="75"
                        name="quality"
                        value="75"
                        defaultChecked 
                    />
                    <label htmlFor="75">75%</label>
                    <input
                        type="radio"
                        id="100"
                        name="quality"
                        value="100"
                    />
                    <label htmlFor="100">100%</label>
                </div>
        </fieldset>

        {/* Dimensions */}
        <p className={styles.dimensions}>Image dimensions:</p>
        <fieldset className={styles.radioGroup}>
                <div>
                    <input
                        type="radio"
                        id="width"
                        name="direction"
                        value="width"
                        required
                        defaultChecked 
                    />
                    <label htmlFor="width">Width</label>
                    <input
                        type="radio"
                        id="height"
                        name="direction"
                        value="height"
                    />
                    <label htmlFor="height">Height</label>
                </div>
        </fieldset>

        <div className={styles.flex}>
            <div className={styles.select}>
                <select id="dimensions" name="dimensions">
                    <option value="600px">600px</option>
                    <option value="800px">800px</option>
                    <option value="1024px">1024px</option>
                    <option value="1200px" defaultValue>1200px</option>
                    <option value="2560px">2560px</option>
                </select>
            </div>
            <div>
                <p className={styles.p}>or custom:</p>
            </div>
            <div className={styles.text}>
                <input type="text" placeholder="Enter image width in px"/>
            </div>
        </div>
        
        

    </form>
  )
}

export default Form