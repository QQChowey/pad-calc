import React from 'react'
import styles from './backdrop.module.css'

const Backdrop = ({click}) => (
    <div className={styles.backdrop} onClick={click}/>
)

export default Backdrop;
