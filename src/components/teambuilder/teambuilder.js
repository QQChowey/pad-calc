import React from 'react'
import Dropdown from './dropdown'
import styles from './teambuilder.module.css'
import TeamTable from './teamtable'

const TeamBuilder = ({mode, dropdownChangeHandler}) => {
    let main
    if (mode === "1P") {
        main = (
            <React.Fragment>
                <TeamTable />
            </React.Fragment>
        )
    }
    else if (mode === "2P") {
        main = (
            <React.Fragment>
                <TeamTable />
                <div className={styles.spacer} />
                <TeamTable />
            </React.Fragment>
        )
    }
    else if (mode === "3P") {
        main = (
            <React.Fragment>
                <TeamTable />
                <div className={styles.spacer} />
                <TeamTable />
                <div className={styles.spacer} />
                <TeamTable />
            </React.Fragment>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.select}>
                <Dropdown
                    value={["1P", "2P", "3P"]}
                    selected={mode}
                    changeHandler={dropdownChangeHandler}
                />
            </div>
            <div className={styles.wrapper}>
                {main}
            </div>
        </div>
    )
}

export default TeamBuilder
