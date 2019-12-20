import React, { Component } from 'react'
import Dropdown from './dropdown'
import styles from './teambuilder.module.css'
import TeamTable from './teamtable'

class TeamBuilder extends Component {



    render() {
        return (
            <div className={styles.container}>
                <div className={styles.box1}>
                    <Dropdown value={["1P", "2P", "3P"]}/>
                </div>
                <div className={styles.box2}>
                    <TeamTable />
                    <TeamTable />
                    <TeamTable />
                </div>
            </div>
        )
    }
}

export default TeamBuilder
