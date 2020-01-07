import React, { Component } from 'react'
import Dropdown from './dropdown'
import styles from './teambuilder.module.css'
import TeamTable from './teamtable'

const TeamBuilder = ({mode, dropdownChangeHandler}) => {
    let main
    // if (mode = "1P") {
    //
    // }
    // if (mode = "2P")
    // if (mode = "3P")
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
                <TeamTable />
                <div className={styles.spacer} />
                <TeamTable />
                <div className={styles.spacer} />
                <TeamTable />
                <div className={styles.spacer} />
            </div>
        </div>
    )
}

export default TeamBuilder
