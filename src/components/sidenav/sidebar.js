import React from 'react';
import cx from 'classnames';
import styles from './sidebar.module.css'

const SideBar = ({show}) => {
    let styleSideBar = styles.sideBar
    if (show) {
        styleSideBar = cx(styles.sideBar, styles.open)
    }

    return (
        <nav className={styleSideBar}>
            <ul>
                <li>
                    <a href="/">Team Builder</a>
                </li>
                <li>
                    <a href="/">Calculator</a>
                </li>

            </ul>
        </nav>
    )
}

export default SideBar;
