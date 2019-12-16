import React from 'react'
import cx from 'classnames'
import styles from './sidebar.module.css'

const SideBar = ({show}) => {
    let styleSideBar = styles.sideBar
    if (show) {
        styleSideBar = cx(styles.sideBar, styles.open)
    }

    return (
        <nav className={styleSideBar}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <div className={styles.div}>Team Builder</div>
                </li>
                <li className={styles.li}>
                    <div className={styles.div} >Calculator</div>
                </li>
                <li className={styles.li}>
                    <div className={styles.div} >Exports</div>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar;
