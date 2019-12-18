import React from 'react'
import cx from 'classnames'
import styles from './sidebaritem.module.css'

const SideBarItem = ({click, id, selected, text}) => {

    let styleLi = styles.li
    let styleDiv = styles.div
    if (selected) {
        styleLi = cx(styles.li, styles.selected)
        styleDiv = cx(styles.div, styles.selected)
    }

    return (
        <li className={styleLi} onClick={!selected ? (() => click(id)) : null}>
            <div className={styleDiv}>{text}</div>
        </li>
    )
}

export default SideBarItem
