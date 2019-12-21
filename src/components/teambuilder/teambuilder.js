import React, { Component } from 'react'
import Dropdown from './dropdown'
import styles from './teambuilder.module.css'
import TeamTable from './teamtable'

class TeamBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: "1P",

        }
    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.select}>
                    <Dropdown value={["1P", "2P", "3P"]} selected={this.state.players}/>
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
}

export default TeamBuilder
