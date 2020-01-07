import React, { Component } from 'react'
import Backdrop from './sidenav/backdrop'
import SideBar from './sidenav/sidebar'
import styles from './layout.module.css'
import TeamBuilder from './teambuilder/teambuilder'
import Toolbar from './toolbar/toolbar'

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mainLayout: "team-builder",
            sidenav_sideBarOpen: false,
            //teambuilder state
            teambuilder_mode: "1P",

        }
    }

    //sidenav handlers
    sideToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sidenav_sideBarOpen: !prevState.sidenav_sideBarOpen}
        });
    }

    backdropClickHandler = () => {
        this.setState({sidenav_sideBarOpen: false})
    }

    sideBarClickHandler = (e) => {
        this.setState({mainLayout: e})
        this.setState({sidenav_sideBarOpen: false})
    }

    //teambuilder handlers
    dropdownChangeHandler = (e) => {
        this.setState({teambuilder_mode: e.target.value})
    }

    render() {
        let backdrop
        if (this.state.sidenav_sideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        let main
        if (this.state.mainLayout === "team-builder"){
            main = <TeamBuilder
                mode={this.state.teambuilder_mode}
                dropdownChangeHandler={this.dropdownChangeHandler}
            />
        }
        else if (this.state.mainLayout === "calculator"){
            main = "Calculator"
        }
        else if (this.state.mainLayout === "exports"){
            main = "Exports"
        }

        return (
            <div className={styles.div}>
                <Toolbar
                    sideToggleClickHandler={this.sideToggleClickHandler}
                />
                <SideBar
                    show={this.state.sidenav_sideBarOpen}
                    selected={this.state.mainLayout}
                    sideBarClickHandler={this.sideBarClickHandler}
                />
                {backdrop}
                <main className={styles.main}>
                    {main}
                </main>
            </div>
        )
    }

}

export default Layout
