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
            sideBarOpen: false,
            mainLayout: "team-builder",
        }
    }

    sideToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideBarOpen: !prevState.sideBarOpen}
        });
    }

    backdropClickHandler = () => {
        this.setState({sideBarOpen: false})
    }

    sideBarClickHandler = (e) => {
        this.setState({mainLayout: e})
        this.setState({sideBarOpen: false})
    }

    render() {
        let backdrop
        if (this.state.sideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        const load = [<TeamBuilder />, "Calculator", "Exports"]
        let main
        if (this.state.mainLayout === "team-builder"){
            main = load[0]
        }
        else if (this.state.mainLayout === "calculator"){
            main = load[1]
        }
        else if (this.state.mainLayout === "exports"){
            main = load[2]
        }

        return (
            <div className={styles.div}> 
                <Toolbar
                    sideToggleClickHandler={this.sideToggleClickHandler}
                />
                <SideBar
                    show={this.state.sideBarOpen}
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
