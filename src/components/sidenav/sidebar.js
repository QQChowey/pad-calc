import React from 'react'
import cx from 'classnames'
import SideBarItem from './sidebaritem'
import styles from './sidebar.module.css'

const SideBar = ({show, selected, sideBarClickHandler}) => {
    let styleSideBar = styles.sideBar
    if (show) {
        styleSideBar = cx(styles.sideBar, styles.open)
    }

    return (
        <nav className={styleSideBar}>
            <ul className={styles.ul}>
                <SideBarItem
                    click={sideBarClickHandler}
                    id="team-builder"
                    selected={("team-builder" === selected) ? true : false}
                    text="Team Builder"
                />
                <SideBarItem
                    click={sideBarClickHandler}
                    id="calculator"
                    selected={("calculator" === selected) ? true : false}
                    text="Calculator"
                />
                <SideBarItem
                    click={sideBarClickHandler}
                    id="exports"
                    selected={("exports" === selected) ? true : false}
                    text="Exports"
                />
            </ul>
        </nav>
    )
}

export default SideBar;
