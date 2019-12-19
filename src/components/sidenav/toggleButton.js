import React from 'react';
import styles from './toggleButton.module.css'

const ToggleButton = ({click}) => (
    <button className={styles.button} onClick={click}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
    </button>
)

export default ToggleButton
