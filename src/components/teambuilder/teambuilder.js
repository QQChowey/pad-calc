import React, { Component } from 'react'
import Dropdown from './dropdown'
import styles from './teambuilder.module.css'
import TeamTable from './teamtable'

class TeamBuilder extends Component {



    render() {
        return (
            <div className={styles.container}>
                <Dropdown value={["1P", "2P", "3P"]}/>
                <div className={styles.spacer} />                
                <div className={styles.box}>
                    <TeamTable />
                    <div className={styles.spacer} />
                    <TeamTable />
                    <div className={styles.spacer} />
                    <TeamTable />
                </div>
            </div>
        )
    }
}

export default TeamBuilder
