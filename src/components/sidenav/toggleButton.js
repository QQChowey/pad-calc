import React from 'react';
import styles from './toggleButton.module.css'

const ToggleButton = props => (
    <button className={styles.toggleButton}>
        <div className={styles.toggleButton__line} />
        <div className={styles.toggleButton__line} />
        <div className={styles.toggleButton__line} />
    </button>
)

export default ToggleButton
