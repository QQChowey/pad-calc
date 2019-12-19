import React from "react"
import styles from './toolbar.module.css'
import ToggleButton from '../sidenav/toggleButton'

const Toolbar = ({sideToggleClickHandler}) => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <div>
                <ToggleButton click={sideToggleClickHandler}/>
            </div>
            <div className={styles.logo}>
                Valeria
            </div>
            <div className={styles.spacer} />
            <div className={styles.items}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <button
                            className={styles.button}
                            onClick={() => console.log("Help")}
                        >
                            <i className="material-icons">help_outline</i>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button
                            className={styles.button}
                            onClick={() => console.log("Settings")}
                        >
                            <i className="material-icons">settings</i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar
