import React from 'react';
import styles from './toggleButton.module.css'

const ToggleButton = ({click}) => (
    <button
        className={styles.toggleButton}
        onClick={click}
    >
        <div className={styles.toggleButton__line} />
        <div className={styles.toggleButton__line} />
        <div className={styles.toggleButton__line} />
    </button>
)

export default ToggleButton
