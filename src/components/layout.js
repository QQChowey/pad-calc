import React, { Component } from 'react'
import SideBar from './sidenav/sidebar'
import Toolbar from './toolbar/toolbar'
import Backdrop from './sidenav/backdrop'

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sideBarOpen: false,
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

    render() {
        let backdrop;

        if (this.state.sideBarOpen) {
            backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />
        }

        return (
            <div style={{height: "100%"}}>
                <Toolbar sideToggleClickHandler={this.sideToggleClickHandler} />
                <SideBar show={this.state.sideBarOpen}/>
                {backdrop}
                <main>
                    <p>Hello World!</p>
                </main>
            </div>
        )
    }

}

export default Layout
