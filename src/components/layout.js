import React, { Component } from 'react'
import SideBar from './sidenav/sidebar'
import Toolbar from './toolbar/toolbar'
import Backdrop from './sidenav/backdrop'

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
        console.log(this.state.mainLayout)
        this.setState({sideBarOpen: false})
    }

    render() {
        let backdrop
        if (this.state.sideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        let main
        if (this.state.mainLayout === "team-builder"){
            main = "Team Builder"
        }
        else if (this.state.mainLayout === "calculator"){
            main = "Calculator"
        }
        else if (this.state.mainLayout === "exports"){
            main = "Exports"
        }

        return (
            <div style={{height: "100%"}}>
                <Toolbar sideToggleClickHandler={this.sideToggleClickHandler} />
                <SideBar
                    show={this.state.sideBarOpen}
                    selected={this.state.mainLayout}
                    sideBarClickHandler={this.sideBarClickHandler}
                />
                {backdrop}
                <main>
                    <div>{main}</div>
                </main>
            </div>
        )
    }

}

export default Layout
